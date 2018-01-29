import {
  alertAction,
  updateUserProfile,
  successRetrievedPassword
} from '../sync/authenticationActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from '../../../services/firebase/authentication'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../constants/messages'
import {
  signUpUser,
  getUserProfile
} from '../../../services/backend/userService'

export function signInAction (email, password) {
  return async dispatch => {
    try {
      const firebaseUser = await signInWithEmailAndPassword(email, password)
      const user = await getUserProfile(firebaseUser.uid)
      dispatch(updateUserProfile(user))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function signUpAction (signUpForm) {
  return async dispatch => {
    try {
      const user = await signUpUser(signUpForm)
      return signInAction(user.email, signUpForm.password)
    } catch (error) {
      // TODO: this method is receiving an object, it should've a string
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
