import PayPal from 'react-native-paypal-wrapper'

export const payWithPayPal = async (amount, description, onSuccess, onError) => {
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
      console.log('usuario cancelou')
    }

    console.log('PAYPAL FAILED', JSON.stringify(err))
    onError(err)
  }
}
