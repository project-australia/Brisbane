import {
  GET_BOOK_QUOTE,
  SHOW_ALERT
} from '../../types/bookTypes'
import { BOOK_INITIAL_STATE } from './constants'
import {
  showAlertHandler,
  getBookQuoteHandler
} from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler,
  [GET_BOOK_QUOTE]: getBookQuoteHandler
}

export const bookReducerConfig = {
  initialState: BOOK_INITIAL_STATE,
  actionHandlers: actionHandlers
}
