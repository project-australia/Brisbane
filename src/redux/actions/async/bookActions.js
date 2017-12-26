import {
  GET_BOOK_QUOTE
} from '../../types/bookTypes'

import {
  alertAction,
  actionCreate
} from '../sync/bookActions'

export function getQuoteAction (isbn) {
  return async dispatch => {
    try {
      const book = { price: 100, name: 'Mocked Book' }
      dispatch(actionCreate(
        GET_BOOK_QUOTE,
        book
      ))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
