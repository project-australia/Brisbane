import Axios from 'axios'

export const recentlyAddedBooks = async () => {
  const response = await Axios.get('/books/recentlyAddedBooks')
  return response.data
}

export const featuredBooks = async () => {
  const response = await Axios.get('/books/featuredBooks')
  return response.data
}
