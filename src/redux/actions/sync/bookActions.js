import {
  SHOW_ALERT
} from '../../types/bookTypes'

export const actionCreate = (type, payload) => ({ type, payload })

export const showAlert = message => ({ type: SHOW_ALERT, message })
