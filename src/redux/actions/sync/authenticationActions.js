import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  UPDATE_USER_INFO,
  SHOW_ALERT,
  CLEAR_ALERT,
  UPDATE_USER_ORDERS,
  UPDATE_USER_NETWORKING
} from '../../types/authenticationTypes'

export const clearAlert = () => ({ type: CLEAR_ALERT })
export const updateUserProfile = user => ({ type: UPDATE_USER_INFO, user })
export const updateUserOrders = orders => ({ type: UPDATE_USER_ORDERS, orders })
export const updateUserNetworking = network => ({
  type: UPDATE_USER_NETWORKING,
  network
})
export const successRetrievedPassword = message => ({
  type: FORGOT_PASSWORD_SUCCESS,
  message
})
export const alertAction = ({ message }) => ({
  type: AUTH_FAILED_ALERT,
  message
})
export const showAlert = message => ({ type: SHOW_ALERT, message })
