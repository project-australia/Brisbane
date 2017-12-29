import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  SHOW_ALERT,
  UPDATE_USER_INFO,
} from '../../types/authenticationTypes'
import { AUTH_INITIAL_STATE } from './constants'
import {
  showAlertHandler,
  updateUserProfileHandler
} from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler,
  [AUTH_FAILED_ALERT]: showAlertHandler,
  [FORGOT_PASSWORD_SUCCESS]: showAlertHandler,
  [UPDATE_USER_INFO]: updateUserProfileHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
