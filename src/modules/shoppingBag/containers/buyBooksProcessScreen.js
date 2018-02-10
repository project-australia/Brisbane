import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { createOrder } from '../../../services/backend/orderService'
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
      return (
        total + item.quantity * (item.book.buyingPrice || item.book.sellPrice)
      )
    }, 0)

    return (
      <BuyBooksProcess
        books={this.props.booksToBuy}
        checkoutWithPayPal={this.checkoutWithPaypal(totalPrice)}
        navigateBack={this.goBack}
        totalPrice={totalPrice}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()

  checkoutWithPaypal = price => async () => {
    const { user, booksToBuy } = this.props
    try {
      const order = await createOrder('BUY', 'SHIPPED', booksToBuy, user)
      await payWithPayPal(
        price,
        'Buying books',
        this.onPayPalOnSuccess(order),
        this.onPayPalError(order)
      )
    } catch (error) {
      console.log('deu ruim o checkout com paypal', error)
    }
  }

  onPayPalError = order => paypalResponse => {
    const transactionId = paypalResponse.response.id
    console.log('PRECISAMOS ATUALIZAR A ORDER', order)
    return console.log(
      `Transaction #${transactionId} failed`,
      paypalResponse,
      order
    )
  }

  onPayPalOnSuccess = order => paypalResponse => {
    const transactionId = paypalResponse.response.id
    console.log('PRECISAMOS ATUALIZAR A ORDER')
    return console.log(
      `Transaction #${transactionId} successfull`,
      paypalResponse,
      order
    )
  }
}

BuyBooksProcessContainer.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

const mapStateToProps = ({ authentication: { user }, shoppingBag }) => {
  const booksToBuy = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.BUY
  )
  return { booksToBuy, user }
}

export const BuyBooksProcessScreen = connect(mapStateToProps)(
  BuyBooksProcessContainer
)
