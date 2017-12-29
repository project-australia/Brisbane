import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  SHOW_ALERT,
  UPDATE_USER_INFO,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS
} from '../../types/authenticationTypes'
import { AUTH_INITIAL_STATE } from './constants'
import {
  showAlertHandler,
  signInSuccessHandler,
  signUpSuccessHandler,
  updateUserProfileHandler
} from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler,
  [AUTH_FAILED_ALERT]: showAlertHandler,
  [SIGN_IN_SUCCESS]: signInSuccessHandler,
  [SIGN_UP_SUCCESS]: signUpSuccessHandler,
  [UPDATE_USER_INFO]: updateUserProfileHandler,
  [FORGOT_PASSWORD_SUCCESS]: showAlertHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
