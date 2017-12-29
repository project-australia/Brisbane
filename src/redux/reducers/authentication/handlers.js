import { AUTH_INITIAL_STATE } from './constants'

export const updateUserProfileHandler = (state, { user }) => ({
  ...AUTH_INITIAL_STATE,
  user
})
export const signUpSuccessHandler = () => AUTH_INITIAL_STATE
export const signInSuccessHandler = (state, { user }) => ({ // FIXME: This action handler is same as
// updateUserProfileHandler
  ...AUTH_INITIAL_STATE,
  user
})
export const showAlertHandler = (state, { message }) => ({
  ...AUTH_INITIAL_STATE,
  alert: { showAlert: true, message }
})
