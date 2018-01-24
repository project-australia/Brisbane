import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  UPDATE_USER_INFO,
  SHOW_ALERT
} from '../../types/authenticationTypes'

export const updateUserProfile = user => ({ type: UPDATE_USER_INFO, user })
export const successRetrievedPassword = message => ({
  type: FORGOT_PASSWORD_SUCCESS,
  message
})
export const alertAction = ({ message }) => ({
  type: AUTH_FAILED_ALERT,
  message
})
export const showAlert = message => ({ type: SHOW_ALERT, message })
