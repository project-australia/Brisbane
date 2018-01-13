import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'
import PayPalCheckoutButton from '../../../assets/html/paypal-checkout.html'

export class PayPalCheckout extends Component {
  render () {
    const total = this.props.total || this.props.navigation.state.params.total || '10.00'
    const injectFunction = `var paymentTotal = ${total};`

    return (
      <WebView
        source={PayPalCheckoutButton}
        injectedJavaScript={injectFunction}
        style={{marginTop: 20}}
        javaScriptEnabled
      />
    )
  }
}

PayPalCheckout.propTypes = {
  total: PropTypes.string.isRequired // TODO: Create a stronger type to total
}
