import Axios from 'axios'
import { throwResponseBody } from './index'

export const featuredBooks = async () =>
  Axios.get('books/featured').then(res => res.data)
export const recentlyAddedBooks = async () =>
  Axios.get('books/recentlyAdded').then(res => res.data)
export const findBookByISBN = async (isbn) =>
  Axios.get(`books/${isbn}/evaluation`).then(res => res.data).catch(err => throwResponseBody(err))
