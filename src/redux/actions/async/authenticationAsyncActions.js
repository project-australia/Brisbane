import {
  alertAction,
  signInSuccess,
  signUpSuccess,
  updateUserProfile,
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
      const firebaseUser = await signInWithEmailAndPassword(email, password)
      // TODO: Call our backend passing firebase ID to get user profile and change line below
      const user = {id: firebaseUser.uid} // await getUserProfile(firebaseUser.uid)
      dispatch(updateUserProfile(user))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function signUpAction (signUpForm) {
  return async dispatch => {
    try {
      // TODO: Call our backend passing all signup informations
      // const user = await signUpUser(signUpForm)
      // dispatch(updateUserProfile(user))
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
