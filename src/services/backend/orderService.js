import Axios from 'axios'

export const createOrder = async (orderType, shippingMethod, books, user) => {
  const order = {
    orderType,
    items: books.map(book => book.id),
    shippingMethod, // TODO: Precisamos pegar isso de algum lugar
    shippingAddress: user.address
  }
  return Axios.post(`users/${user.id}/orders`, order).then(res => res.data)
}
