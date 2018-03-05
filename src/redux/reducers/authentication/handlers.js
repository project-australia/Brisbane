import { AUTH_INITIAL_STATE } from './constants'

export const updateUserProfileHandler = (state, { user }) => ({
  ...AUTH_INITIAL_STATE,
  user
})

export const updateUserNetworkingHandler = (state, { network }) => {
  const user = state.user
  user.network = network
  return { ...state, user }
}

export const updateUserOrdersHandler = (state, { orders }) => {
  const user = state.user
  user.orders = orders
  return { ...state, user }
}

export const showAlertHandler = (state, { message }) => ({
  ...AUTH_INITIAL_STATE,
  alert: { showAlert: true, message }
})
