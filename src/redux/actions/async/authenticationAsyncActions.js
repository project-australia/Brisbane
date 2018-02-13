import Axios from 'axios'

import {
  alertAction,
  updateUserProfile,
  successRetrievedPassword
} from '../sync/authenticationActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  logOut
} from '../../../services/firebase/authentication'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../constants/messages'
import {
  signUpUser,
  getUserProfile
} from '../../../services/backend/userService'
import { NOT_LOGGED_IN } from '../../reducers/authentication/constants'

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
      dispatch(signInAction(user.email, signUpForm.password))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function logOutAction (signUpForm) {
  return async dispatch => {
    try {
      await logOut(signUpForm)
      dispatch(updateUserProfile(NOT_LOGGED_IN))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function updateProfileAction (id, userProfile) {
  return async dispatch => {
    try {
      const response = await Axios.put(`/users/${id}/profile`, userProfile)
      dispatch(updateUserProfile(response.data))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function requestWithdrawAction (id, walletWithPaypalAccount) {
  return async dispatch => {
    try {
      const response = await Axios.put(`/users/${id}/requestwithdraw`, walletWithPaypalAccount)
      dispatch(updateUserProfile(response.data))
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
