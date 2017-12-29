import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  SHOW_ALERT,
  UPDATE_USER_INFO
} from '../../types/authenticationTypes'
import { AUTH_INITIAL_STATE } from './constants'
import {
  showAlertHandler,
  updateUserProfileHandler
} from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler, // FIXME: All these handlers are the same,
  [AUTH_FAILED_ALERT]: showAlertHandler, // Why do we user different action types?
  [FORGOT_PASSWORD_SUCCESS]: showAlertHandler,
  [UPDATE_USER_INFO]: updateUserProfileHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
