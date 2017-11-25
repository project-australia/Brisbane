import { alertAction, signUpSuccess, succesRetrievedPassword, updateUserData } from '../sync/authActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from '../../../services/firebase/authentication'

export function signInAction (email, password) {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      dispatch(updateUserData(user))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function signUpAction (email, password) {
  return async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(email, password)
      dispatch(signUpSuccess())
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function forgotPasswordAction (email) {
  return async (dispatch) => {
    try {
      await sendPasswordResetEmail(email)
      dispatch(succesRetrievedPassword())
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
