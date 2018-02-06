import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { payWithPayPal } from '../../../services/paypal'
import { BuyBooksProcess } from '../components/buyBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class BuyBooksProcessContainer extends Component {
  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  render () {
    const totalPrice = this.props.booksToBuy.reduce((total, item) => {
      return total + item.quantity * (item.book.buyingPrice || item.book.sellPrice)
    }, 0)

    return (
      <BuyBooksProcess
        booksToSell={this.props.booksToBuy}
        checkoutWithPayPal={this.checkoutWithPaypal(totalPrice)}
        navigateBack={this.goBack}
        totalPrice={totalPrice}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  onPayPalError = (...params) => console.log(...params)
  onPayPalOnSuccess = (...params) => console.log(...params)
  checkoutWithPaypal = price => () => payWithPayPal(price.toString(), 'Buying books', this.onPayPalError, this.onPayPalOnSuccess)
}

BuyBooksProcessContainer.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

const mapStateToProps = state => {
  const booksToBuy = state.shoppingBag.filter(item => item.type === SHOPPING_BAG_TYPES.BUY)
  return { booksToBuy }
}

export const BuyBooksProcessScreen = connect(mapStateToProps)(
  BuyBooksProcessContainer
)
