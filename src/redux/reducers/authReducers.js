import { SIGN_IN_SUCCESS } from '../types/authTypes'

export const USER_NOT_LOGGED_IN = { uid: '', email: '', phoneNumber: null, emailVerified: false }
export const NO_ALERTS = { showAlert: false, message: '' }
export const AUTH_INITIAL_STATE = { user: USER_NOT_LOGGED_IN, alert: NO_ALERTS }

export const authReducers = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {...AUTH_INITIAL_STATE, user: action.user}
    default:
      return state
  }
}
