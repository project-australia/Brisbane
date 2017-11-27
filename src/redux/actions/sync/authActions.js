import { ALERT_AUTH_FAILED, FORGOT_PASSWORD_SUCCESS, SIGN_UP_SUCCESS } from '../../types'

export const signUpSuccess = () => ({type: SIGN_UP_SUCCESS})
export const successRetrievedPassword = () => ({type: FORGOT_PASSWORD_SUCCESS})
export const alertAction = (error) => ({type: ALERT_AUTH_FAILED, message: error.message})
