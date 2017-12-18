import {
  FORGOT_PASSWORD_SUCCESS,
  AUTH_FAILED_ALERT,
  SHOW_ALERT,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS
} from '../../types/authTypes'
import { AUTH_INITIAL_STATE } from './constants'
import { showAlertHandler, signInSuccessHandler, signUpSuccessHandler } from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler,
  [AUTH_FAILED_ALERT]: showAlertHandler,
  [SIGN_IN_SUCCESS]: signInSuccessHandler,
  [SIGN_UP_SUCCESS]: signUpSuccessHandler,
  [FORGOT_PASSWORD_SUCCESS]: showAlertHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
