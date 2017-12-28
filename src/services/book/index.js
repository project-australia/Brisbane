import {
  GET_BOOK_EVALUATION
} from '../../constants/routes'

export const searchIsbn = async isbn => {
  const fetchResponse = await fetch(`${GET_BOOK_EVALUATION(isbn)}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return fetchResponse.json()
}
