import Config from 'react-native-config'
import PayPal from 'react-native-paypal-wrapper';

export const initializePaypalSDK = () => {
  PayPal.initialize(PayPal.SANDBOX, Config.PAYPAY_CLIENT_ID)
}
