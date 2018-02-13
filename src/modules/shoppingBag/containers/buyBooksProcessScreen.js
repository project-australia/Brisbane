import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { createOrder } from '../../../services/backend/orderService'
import { payWithPayPal } from '../../../services/paypal'
import { BuyBooksProcess } from '../components/buyBooksProcess'

class BuyBooksProcessContainer extends Component {
  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  render() {
    const totalPrice = this.props.booksToBuy.total('BUY')

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
      await payWithPayPal(
        price,
        'Buying books',
        this.onPayPalOnSuccess(booksToBuy, user)
      )
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
    }
  }

  onPayPalOnSuccess = (books, user) => async paypalResponse => {
    const transactionId = paypalResponse.response.id
    const order = await createOrder(
      'BUY',
      'SHIPPED',
      books,
      user,
      transactionId
    )
    console.log('Paypall Payment confirmed, order generated', order)
  }
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
