import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { shoppingBagBuyingTotal } from '../../../redux/selectors/shoppingBagSelectors'
import { ShoppingBag } from '../components/shoppingBag'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { payWithPayPal } from '../../../services/paypal'

class ShoppingBagContainer extends Component {
  static navigationOptions = {
    title: 'Shopping cart',
    header: null
  }

  render() {
    return (
      <ShoppingBag
        booksToBuy={this.props.booksToBuy}
        booksToSell={this.props.booksToSell}
        navigateBack={this.goBack}
        navigateToCheckout={this.navigateToCheckout}
        navigateToHome={this.navigateToHome}
        navigateToSellConfirmation={this.navigateToSellConfirmation}
        navigateToCheckout={this.navigateToBuyBooksProcess}
        navigateToSellBooksProcess={this.navigateToSellBooksProcess}
        navigateToBuyBooksProcess={this.navigateToBuyBooksProcess}
        navigateToCheckout={this.navigateToCheckout}
        navigateToHome={this.navigateToHome}
        navigateToSellConfirmation={this.navigateToSellConfirmation}
        navigateToCheckout={this.navigateToBuyBooksProcess}
        navigateToSellBooksProcess={this.navigateToSellBooksProcess}
        navigateToBuyBooksProcess={this.navigateToBuyBooksProcess}
        searchBook={() => alert('search book')}
        onScanPress={() => this.props.navigation.navigate('BookScanner', {})}
        totalBuyingPrice={this.props.totalBuyingPrice}
        totalSellingPrice={0}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToCheckout = (price, description, onSuccess, onError) =>
    payWithPayPal('666.66', 'INSERT A DESCRIPTION' + ' HERE', alert, alert)
  navigateToSellConfirmation = () =>
    this.props.navigation.navigate('ConfirmationScreen')
  navigateToHome = () => this.props.navigation.navigate('Home')
  navigateToSellBooksProcess = () =>
    this.props.navigation.navigate('SellBooksProcess')
  navigateToBuyBooksProcess = () =>
    this.props.navigation.navigate('BuyBooksProcess')
}

ShoppingBagContainer.propTypes = {
  booksToBuy: PropTypes.arrayOf(ShoppingBagItemPropType),
  totalBuyingPrice: PropTypes.number.isRequired,
  totalSellingPrice: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  const { shoppingBag } = state
  const booksToBuy = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.BUY
  )
  const booksToSell = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.SELL
  )
  return {
    booksToBuy,
    booksToSell,
    totalBuyingPrice: shoppingBagBuyingTotal(state),
    totalSellingPrice: 0
  }
}

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
