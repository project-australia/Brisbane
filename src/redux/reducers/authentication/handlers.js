import { AUTH_INITIAL_STATE } from './constants'

export const signUpSuccessHandler = () => AUTH_INITIAL_STATE
export const signInSuccessHandler = (state, action) => ({
  ...AUTH_INITIAL_STATE,
  user: action.user
})
export const showAlertHandler = (state, { message }) => ({
  ...AUTH_INITIAL_STATE,
  alert: { showAlert: true, message }
})
