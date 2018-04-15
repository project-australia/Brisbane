import Config from 'react-native-config'
import PayPal from 'react-native-paypal-wrapper'

let wasInitiallized = false

export const initializePaypalSDK = async () => {
  try {
    await PayPal.initialize(PayPal[Config.PAYPAL_ENVIRONMENT], Config.PAYPAY_CLIENT_ID)
    wasInitiallized = true
  } catch (e) {
    console.log('Error during initializing paypal')
  }
}

export const pay = async (
  amount,
  description
) => {
  const price = amount.toString()

  if (!price) {
    throw new Error('Attemptive to pay with PayPal without any price')
  }

  if (!wasInitiallized) {
    throw new Error('Paypal was not initialized')
  }

  return PayPal.pay({
    price,
    description,
    currency: 'USD'
  })
}
