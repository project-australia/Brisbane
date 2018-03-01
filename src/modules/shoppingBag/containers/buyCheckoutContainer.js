import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { User } from '../../../domain/User'
import { updateOrder } from '../../../services/backend/orderService'
import { payWithPayPal } from '../../../services/paypal'
import { BuyCheckout } from '../components/buyCheckout'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

export class BuyCheckoutContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    generateOrder: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
    selectExpediteShipping: PropTypes.func.isRequired,
    selectStandardShipping: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    onCheckoutSuccess: PropTypes.func.isRequired,
    shippingMethod: PropTypes.oneOf(['EXPEDITE', 'STANDARD', 'IN_PERSON'])
      .isRequired,
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
  }

  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  generateBuyOrder = async () => {
    const { user, books, shippingMethod } = this.props
    return this.props.generateOrder(user, books, shippingMethod, 'BUY')
  }

  successAlert = () => {
    Alert.alert(
      'Payment Confirmed',
      'Thanks for buying',
      [
        {
          text: 'OK',
          onPress: this.props.onCheckoutSuccess
        }
      ],
      { onDismiss: this.props.onCheckoutSuccess }
    )
  }

  onPayPalOnSuccess = order => async paypalResponse => {
    await updateOrder(
      this.props.user.id,
      order.id,
      paypalResponse.response.id,
      'PAYMENT_CONFIRMED'
    )
    this.successAlert()
  }

  payPalCheckout = async () => {
    console.log(this.props)
    try {
      const order = await this.generateBuyOrder()
      console.log('oi')
      await payWithPayPal(
        this.props.totalPrice,
        'Buying books',
        this.onPayPalOnSuccess(order)
      )
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
    }
  }

  render() {
    return (
      <BuyCheckout
        books={this.props.books}
        checkoutWithPayPal={this.payPalCheckout}
        checkoutWithInPersonPayment={this.props.checkoutWithInPersonPayment}
        isLoading={this.props.isLoading}
        navigateBack={this.props.navigateBack}
        selectExpediteShipping={this.props.selectExpediteShipping}
        selectStandardShipping={this.props.selectStandardShipping}
        shippingMethod={this.props.shippingMethod}
        expediteShippingPrice={this.props.shippingPrice}
        totalPrice={this.props.totalPrice}
      />
    )
  }
}
