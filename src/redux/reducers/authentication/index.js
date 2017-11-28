import { FORGOT_PASSWORD_SUCCESS, SHOW_ALERT, SIGN_IN_SUCCESS, SIGN_UP_SUCCESS } from '../../types/authTypes'
import { AUTH_INITIAL_STATE } from './constants'
import { forgotPasswordHandler, showAlertHandler, signInSuccessHandler, signUpSuccessHandler } from './handlers'

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
