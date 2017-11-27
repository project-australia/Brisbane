import {
  SIGN_IN_SUCCESS, SIGN_UP_SUCCESS, FORGOT_PASSWORD_SUCCESS, AUTH_FAILED_ALERT,
  SHOW_ALERT
} from '../types/authTypes'

export const CONSTANTS = {
  NOT_LOGGED_IN: { uid: null, email: null, phoneNumber: null, emailVerified: false },
  NO_ALERTS: { showAlert: false, message: '' }
}

export const AUTH_INITIAL_STATE = {
  user: CONSTANTS.NOT_LOGGED_IN,
  alert: CONSTANTS.NO_ALERTS
}

const signUpSuccessHandler = (state, action) => (AUTH_INITIAL_STATE)
const signInSuccessHandler = (state, action) => ({...AUTH_INITIAL_STATE, user: action.user})
const forgotPasswordHandler = (state, {message}) => ({...AUTH_INITIAL_STATE, alert: { showAlert: true, message }})
const showAlertHandler = (state, {message}) => ({...AUTH_INITIAL_STATE, alert: { showAlert: true, message }})

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler,
  [SIGN_IN_SUCCESS]: signInSuccessHandler,
  [SIGN_UP_SUCCESS]: signUpSuccessHandler,
  [FORGOT_PASSWORD_SUCCESS]: forgotPasswordHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
