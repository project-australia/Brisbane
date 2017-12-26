import {
  GET_BOOK_QUOTE
} from '../../types/authTypes'

import {
  alertAction,
  actionCreate
} from '../sync/authActions'

export function getQuoteAction (isbn) {
  return async dispatch => {
    try {
      const book = { price: 100 }
      dispatch(actionCreate(
        GET_BOOK_QUOTE,
        book
      ))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
