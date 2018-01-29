import { GET_BOOK_EVALUATION } from '../../constants/routes'

export const searchIsbn = async isbn => {
  const fetchResponse = await fetch(`${GET_BOOK_EVALUATION(isbn)}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const backEndBook = await fetchResponse.json()

  const frontEndbook = {
    id: backEndBook.id,
    imageUri: backEndBook.images.large,
    title: backEndBook.title,
    author: backEndBook.authors,
    edition: backEndBook.edition,
    aboutBook: backEndBook.description,
    sellPrice: backEndBook.price
  }

  return frontEndbook
}
