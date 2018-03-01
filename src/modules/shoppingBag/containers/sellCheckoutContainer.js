import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { User } from '../../../domain/User'
import { SellCheckout } from '../components/sellCheckout'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

export class SellCheckoutContainer extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onCheckoutSuccess: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    user: PropTypes.instanceOf(User),
    generateOrder: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired
  }

  generateSellOrder = async () => {
    const { user, books } = this.props
    await this.props.generateOrder(user, books, 'SHIPPO', 'SELL')
  }

  inGetLabelCheckout = async () => {
    try {
      await this.generateSellOrder()
      this.props.onCheckoutSuccess()
    } catch (error) {
      alert('error during label checkout')
      console.log('label error', error)
    }
  }

  render() {
    return (
      <SellCheckout
        books={this.props.books}
        isLoading={this.props.isLoading}
        inPersonCheckout={this.props.checkoutWithInPersonPayment}
        inGetLabelCheckout={this.inGetLabelCheckout}
        navigateBack={this.props.navigateBack}
        totalPrice={this.props.totalPrice}
      />
    )
  }
}
