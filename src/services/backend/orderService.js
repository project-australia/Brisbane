import Axios from 'axios'
import { throwResponseBody } from './index'

const validShippingMethods = ['STANDARD', 'EXPEDITE', 'IN_PERSON']
const validOrderStatus = [
  'WAITING_PAYMENT',
  'PAYMENT_CONFIRMED',
  'CANCELLED',
  'RECEIVED',
  'SHIPPED'
]

export const createOrder = async (
  orderType,
  shippingMethod = 'IN_PERSON',
  books,
  shippingAddress,
  userId
) => {
  if (!validShippingMethods.includes(shippingMethod)) {
    throw new Error('Invalid Shipping Method')
  }

  const order = {
    orderType,
    items: books.map(book => book.id),
    shippingMethod,
    shippingAddress
  }

  return Axios.post(`users/${userId}/orders`, order)
    .then(res => res.data)
    .catch(err => throwResponseBody(err))
}

export const updateOrder = async (userId, orderId, transactionId, status) => {
  if (!validOrderStatus.includes(status)) {
    throw new Error('Invalid Status')
  }

  return Axios.put(`users/${userId}/orders/${orderId}`, {
    status,
    transactionId
  })
    .then(res => res.data)
    .catch(err => throwResponseBody(err))
}
