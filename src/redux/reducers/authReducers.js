import { SIGN_IN_SUCCESS } from '../types/authTypes'

export const CONSTANTS = {
  NOT_LOGGED_IN: { uid: null, email: null, phoneNumber: null, emailVerified: false },
  NO_ALERTS: { showAlert: false, message: '' }
}

export const AUTH_INITIAL_STATE = {
  user: CONSTANTS.NOT_LOGGED_IN,
  alert: CONSTANTS.NO_ALERTS
}

const signInSuccessHandler = (state, action) => ({...AUTH_INITIAL_STATE, user: action.user})

export const actionHandlers = {
  [SIGN_IN_SUCCESS]: signInSuccessHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
