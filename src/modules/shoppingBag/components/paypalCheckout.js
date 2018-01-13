import React, { Component } from 'react'
import { WebView } from 'react-native'
import PayPalCheckoutButton from '../../../assets/html/paypal-checkout.html'

// TODO: We have to receive this as prop
const injectFunction = `var paymentTotal = '10.00';`

export class PayPalCheckout extends Component {
  render () {
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
