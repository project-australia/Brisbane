import {
  alertAction, signInSuccess, signUpSuccess, successRetrievedPassword,
  updateUserData
} from '../sync/authActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from '../../../services/firebase/authentication'

export function signInAction (email, password) {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      dispatch(signInSuccess(user))
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
      dispatch(successRetrievedPassword())
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
