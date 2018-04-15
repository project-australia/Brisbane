import { pay } from '../../config/paypal'

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
  try {
    const response = await pay(amount, description)
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
