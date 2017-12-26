import {
  alertAction,
  signInSuccess,
  signUpSuccess,
  successRetrievedPassword
} from '../sync/authenticationActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from '../../../services/firebase/authentication'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../constants/messages'

export function signInAction (email, password) {
  return async dispatch => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      dispatch(signInSuccess(user))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function signUpAction (email, password) {
  return async dispatch => {
    try {
      await createUserWithEmailAndPassword(email, password)
      dispatch(signUpSuccess())
      alert('Sign up success') // TODO: Remove this
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function forgotPasswordAction (email) {
  return async dispatch => {
    try {
      await sendPasswordResetEmail(email)
      dispatch(successRetrievedPassword(FORGOT_PASSWORD_SUCCESS_MSG))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
