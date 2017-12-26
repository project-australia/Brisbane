import {
  SHOW_ALERT
} from '../../types/authTypes'

export const actionCreate = (type, payload) => ({ type, payload })

export const showAlert = message => ({ type: SHOW_ALERT, message })
