import Axios from 'axios'

export const featuredBooks = async () =>
  Axios.get('books/featured').then(res => res.data)
export const recentlyAddedBooks = async () =>
  Axios.get('books/recentlyAdded').then(res => res.data)
