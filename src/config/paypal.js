import Config from 'react-native-config'
import PayPal from 'react-native-paypal-wrapper'

export const initializePaypalSDK = () => {
  PayPal.initialize(
    PayPal.SANDBOX,
    Config.PAYPAY_CLIENT_ID ||
      'ATKvHVVQj35FwyW2jo60NFB8lq1VKaEjUUzJ8bWIolLnH9VpvYtP_4s2tmeuet1QcH2UjlLuyglPGalD'
  )
}
