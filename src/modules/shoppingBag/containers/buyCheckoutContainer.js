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
    prices: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    generateOrder: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
    selectExpediteShipping: PropTypes.func.isRequired,
    selectStandardShipping: PropTypes.func.isRequired,
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
          onPress: () =>
            this.props.onCheckoutSuccess('Instructions sent by email.')
        }
      ],
      {
        onDismiss: () =>
          this.props.onCheckoutSuccess('Instructions sent by email.')
      }
    )
  }

  onPayPalOnSuccess = order => async paypalResponse => {
    this.props.onCheckoutSuccess('Instructions sent by email.')
    await updateOrder(
      this.props.user.id,
      order.id,
      paypalResponse.response.id,
      'PAYMENT_CONFIRMED'
    )
    this.successAlert()
  }

  payPalCheckout = async () => {
    try {
      const order = await this.generateBuyOrder()
      await payWithPayPal(
        this.props.prices.total,
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
        user={this.props.user}
        books={this.props.books}
        checkoutWithPayPal={this.payPalCheckout}
        checkoutWithInPersonPayment={this.props.checkoutWithInPersonPayment}
        isLoading={this.props.isLoading}
        navigateBack={this.props.navigateBack}
        selectExpediteShipping={this.props.selectExpediteShipping}
        selectStandardShipping={this.props.selectStandardShipping}
        shippingMethod={this.props.shippingMethod}
        expediteShippingPrice={this.props.expediteShippingPrice}
        prices={this.props.prices}
      />
    )
  }
}
