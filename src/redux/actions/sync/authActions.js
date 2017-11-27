import { ALERT_AUTH_FAILED, FORGOT_PASSWORD_SUCCESS, SIGN_UP_SUCCESS, SIGN_IN_SUCCESS } from '../../types/authTypes'

export const signUpSuccess = () => ({type: SIGN_UP_SUCCESS})
export const signInSuccess = (user) => ({type: SIGN_IN_SUCCESS, user})
export const successRetrievedPassword = () => ({type: FORGOT_PASSWORD_SUCCESS})
export const alertAction = (error) => ({type: ALERT_AUTH_FAILED, message: error.message})
