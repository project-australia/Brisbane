import PayPal from 'react-native-paypal-wrapper'

export const payWithPayPal = async (price, description, onSuccess, onError) => {
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
    onError(err)
  }
}
