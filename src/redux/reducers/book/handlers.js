import { BOOK_INITIAL_STATE } from './constants'

export const getBookQuoteHandler = (state, action) => ({
  ...BOOK_INITIAL_STATE,
  sellingBook: action.payload
})

export const showAlertHandler = (state, { message }) => ({
  ...BOOK_INITIAL_STATE,
  alert: { showAlert: true, message }
})
