import Axios from 'axios'

export const recentlyAddedBooks = async () => Axios.get('books/recentlyAdded').then(res => res.data)
export const featuredBooks = async () => Axios.get('books/featured').then(res => res.data)
