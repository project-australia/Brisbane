import Axios from 'axios'

export const featuredBooks = async () =>
  Axios.get('books/featured').then(res => res.data || [])
export const recentlyAddedBooks = async () =>
  Axios.get('books/recentlyAdded').then(res => res.data || [])

export const evaluateBookByISBN = async isbn => {
  try {
    const bookResponse = await Axios.get(`books/${isbn}/evaluation`)
    return bookResponse.data
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error('ISBN Not Found')
    } else {
      throw new Error('Error during searching for a book')
    }
  }
}

export const findBookByISBN = async isbn => {
  try {
    const bookResponse = await Axios.get(`books/${isbn}`)
    return bookResponse.status === 200 ? bookResponse.data : null
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error('ISBN Not Found')
    } else {
      throw new Error('Error during searching for a book')
    }
  }
}

export const searchBooksByAuthorIsbnTitle = async searchParam => {
  try {
    const bookResponse = await Axios.get(
      `books/search?searchParam=${searchParam}`
    )
    return bookResponse.data
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error('ISBN Not Found')
    } else {
      throw new Error('Error during searching for a book')
    }
  }
}
