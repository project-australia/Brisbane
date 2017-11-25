import { ALERT_AUTH_FAILED, FORGOT_PASSWORD_SUCCESS, SIGN_UP_SUCCESS, UPDATE_USER } from '../../types'

export const signUpSuccess = () => ({type: SIGN_UP_SUCCESS})
export const updateUserData = (user) => ({type: UPDATE_USER, user})
export const succesRetrievedPassword = () => ({type: FORGOT_PASSWORD_SUCCESS})
export const alertAction = (error) => ({type: ALERT_AUTH_FAILED, message: error.message})
