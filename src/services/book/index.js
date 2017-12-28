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
  console.log('ISBN', isbn)
  console.log('ISBN', fetchResponse)
  const backEndBook = await fetchResponse.json()

  const frontEndbook = {
    id: isbn,
    imageUri: backEndBook.images.large,
    title: backEndBook.title,
    author: backEndBook.authors[0] ? backEndBook.authors.join(', ') : backEndBook.authors,
    edition: backEndBook.edition,
    aboutBook: backEndBook.description,
    sellPrice: backEndBook.price
  }
  console.log('ISBN Result', frontEndbook)
  return frontEndbook
}
