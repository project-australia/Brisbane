import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { User } from '../../../domain/User'
import { SellCheckout } from '../components/sellCheckout'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

export class SellCheckoutContainer extends Component {
  static propTypes = {
    prices: PropTypes.object.isRequired,
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onCheckoutSuccess: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(User),
    generateOrder: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired
  }

  state = {
    isLoading: false
  }

  generateSellOrder = async () => {
    try {
      this.setState({ isLoading: true })
      const { user, books } = this.props
      await this.props.generateOrder(user, books, 'SHIPPO', 'SELL')
    } catch (error) {
      console.warn('Error during generate a selling order', error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  confirmShippingCheckout = () => {
    Alert.alert(
      'Shipping a Book',
      'Do you wanna proceed to a shipped checkout',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Sure thing',
          onPress: this.inGetLabelCheckout
        }
      ]
    )
  }

  inGetLabelCheckout = async () => {
    try {
      await this.generateSellOrder()
      this.props.onCheckoutSuccess("You'll receive label on email")
    } catch (error) {
      alert('error during label checkout')
      console.log('label error', error)
    }
  }

  render() {
    return (
      <SellCheckout
        books={this.props.books}
        isLoading={this.props.isLoading || this.state.isLoading}
        inPersonCheckout={this.props.checkoutWithInPersonPayment}
        inGetLabelCheckout={this.confirmShippingCheckout}
        navigateBack={this.props.navigateBack}
        prices={this.props.prices}
      />
    )
  }
}
