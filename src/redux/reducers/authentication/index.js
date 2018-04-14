import { CLEAR_ALERT } from '../../types'
import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  SHOW_ALERT,
  UPDATE_USER_INFO,
  UPDATE_USER_ORDERS,
  UPDATE_USER_NETWORKING
} from '../../types/authenticationTypes'
import { AUTH_INITIAL_STATE } from './constants'
import {
  showAlertHandler,
  updateUserProfileHandler,
  updateUserOrdersHandler,
  updateUserNetworkingHandler,
  clearAlertHandler
} from './handlers'

export const actionHandlers = {
  [SHOW_ALERT]: showAlertHandler, // FIXME: All these handlers are the same,
  [AUTH_FAILED_ALERT]: showAlertHandler, // Why do we user different action types?
  [FORGOT_PASSWORD_SUCCESS]: showAlertHandler,
  [UPDATE_USER_INFO]: updateUserProfileHandler,
  [UPDATE_USER_ORDERS]: updateUserOrdersHandler,
  [UPDATE_USER_NETWORKING]: updateUserNetworkingHandler,
  [CLEAR_ALERT]: clearAlertHandler
}

export const authReducerConfig = {
  initialState: AUTH_INITIAL_STATE,
  actionHandlers: actionHandlers
}
