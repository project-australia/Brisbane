import {
  GET_BOOK_QUOTE
} from '../../types/bookTypes'

import { searchIsbn } from '../../../services/book/'
import {
  alertAction,
  actionCreate
} from '../sync/bookActions'

export function getQuoteAction (isbn) {
  return async dispatch => {
    try {
      const book = await searchIsbn(isbn)
      dispatch(actionCreate(
        GET_BOOK_QUOTE,
        book
      ))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
