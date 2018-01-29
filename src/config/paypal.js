import Config from 'react-native-config'
import PayPal from 'react-native-paypal-wrapper'

export const initializePaypalSDK = () => {
  PayPal.initialize(
    PayPal.SANDBOX,
    Config.PAYPAY_CLIENT_ID ||
      'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
  )
}
