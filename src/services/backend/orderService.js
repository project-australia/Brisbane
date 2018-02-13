import Axios from 'axios'
import { throwResponseBody } from './index'

const validShippingMethods = ['STANDARD', 'EXPEDITE', 'IN_PERSON']

export const createOrder = async (
  orderType,
  shippingMethod,
  books,
  user,
  transactionId
) => {
  if (!validShippingMethods.includes(shippingMethod)) {
    console.log('invalid shipping method')
  }

  const order = {
    orderType,
    transactionId,
    items: books.map(book => book.id),
    shippingMethod,
    shippingAddress: user.address
  }

  return Axios.post(`users/${user.id}/orders`, order)
    .then(res => res.data)
    .catch(err => throwResponseBody(err))
}

export const updateOrder = async (
  userId,
  orderId,
  status,
  transactionId = null
) => {
  return Axios.post(`users/${userId}/orders/${orderId}`, {
    status,
    transactionId
  })
    .then(res => res.data)
    .catch(err => throwResponseBody(err))
}
