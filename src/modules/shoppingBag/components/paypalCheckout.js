import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'
import PayPal from 'react-native-paypal-wrapper';

import PayPalCheckoutButton from '../../../assets/html/paypal-checkout.html'

const STATUS = {
  0: 'PENDING',
  1: 'SUCCESS',
  2: 'CANCELLED',
  3: 'ERROR'
}

export class PayPalCheckout extends Component {
  state = {
    status: STATUS[0]
  }

  onMessage = (message, ...rest) => {
    console.log('message', message)
    console.log('rest', rest)
  }

  onError = (err, ...rest) => {
    alert(err)
    alert(rest)
  }

  render () {

    PayPal.pay({
      price: '40.70',
      currency: 'USD',
      description: 'Your description goes here',
    }).then(confirm => console.log(confirm))
      .catch(error => console.log(error));

    const total = this.props.total || this.props.navigation.state.params.total
    const injectFunction = `var paymentTotal = ${total};`

    if (!total) {
      alert('Show error page, amount to bill not found')
    }

    return (
      null
    )
  }
}

PayPalCheckout.propTypes = {
  total: PropTypes.string.isRequired // TODO: Create a stronger type to total
}
