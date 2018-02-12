import PayPal from 'react-native-paypal-wrapper'

const defaultErrorCallback = paypalResponse => {
  console.log(`Transaction failed`, paypalResponse)
  return paypalResponse
}

export const payWithPayPal = async (
  amount,
  description,
  onSuccess,
  onError = defaultErrorCallback
) => {
  const price = amount.toString()
  if (!price) {
    throw new Error('Attemptive to pay with PayPal without any price')
  }
  try {
    const response = await PayPal.pay({
      price,
      description,
      currency: 'USD'
    })
    return onSuccess(response)
  } catch (err) {
    if (err.code === 'USER_CANCELLED') {
      console.log('User has cancelled')
    } else {
      console.log('PAYPAL FAILED', JSON.stringify(err))
      onError(err)
    }
  }
}
