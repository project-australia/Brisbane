import { AUTH_FAILED_ALERT, FORGOT_PASSWORD_SUCCESS, SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SHOW_ALERT } from '../../types/authTypes'

export const signUpSuccess = () => ({type: SIGN_UP_SUCCESS})
export const signInSuccess = (user) => ({type: SIGN_IN_SUCCESS, user})
export const successRetrievedPassword = (message) => ({type: FORGOT_PASSWORD_SUCCESS, message})
export const alertAction = ({message}) => ({type: AUTH_FAILED_ALERT, message})
export const showAlert = (message) => ({type: SHOW_ALERT, message})
