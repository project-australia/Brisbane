import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SellCheckout } from '../components/sellCheckout'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

export class SellCheckoutContainer extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onCheckoutSuccess: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    navigateBack: PropTypes.func.isRequired
  }

  render() {
    return (
      <SellCheckout
        books={this.props.books}
        isLoading={this.props.isLoading}
        inPersonCheckout={this.props.checkoutWithInPersonPayment}
        navigateBack={this.props.navigateBack}
        totalPrice={this.props.totalPrice}
      />
    )
  }
}
