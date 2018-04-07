import { getUserOrders } from '../../../services/backend/orderService'
import {
  alertAction,
  updateUserProfile,
  successRetrievedPassword,
  updateUserNetworking,
  updateUserOrders
} from '../sync/authenticationActions'
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  logOut
} from '../../../services/firebase/authentication'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../constants/messages'
import {
  signUpUser,
  getUserProfile,
  putUserProfile
} from '../../../services/backend/userService'
import { NOT_LOGGED_IN } from '../../reducers/authentication/constants'

export function signInAction(email, password) {
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

export function signUpAction(signUpForm) {
  return async dispatch => {
    try {
      const user = await signUpUser(signUpForm)
      dispatch(signInAction(user.email, signUpForm.password))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function logOutAction(signUpForm) {
  return async dispatch => {
    try {
      await logOut()
      dispatch(updateUserProfile(NOT_LOGGED_IN))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function forgotPasswordAction(email) {
  return async dispatch => {
    try {
      await sendPasswordResetEmail(email)
      dispatch(successRetrievedPassword(FORGOT_PASSWORD_SUCCESS_MSG))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

// TODO: Below Thunks are not related to Authentication

export function getUserProfileAction(uid) {
  return async dispatch => {
    try {
      const profile = await getUserProfile(uid)
      dispatch(updateUserProfile(profile))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function updateProfileAction(id, userProfile) {
  return async dispatch => {
    try {
      const updatedProfile = await putUserProfile(id, userProfile)
      dispatch(updateUserProfile(updatedProfile))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function requestWithdrawAction(id, walletWithPaypalAccount) {
  return async dispatch => {
    try {
      const updatedProfile = await requestWithdrawAction(
        id,
        walletWithPaypalAccount
      )
      dispatch(updateUserProfile(updatedProfile))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function getNetworking(id) {
  return async dispatch => {
    try {
      const network = ['user', 'user1']
      dispatch(updateUserNetworking(network))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function getOrders(id) {
  return async dispatch => {
    try {
      const order = await getUserOrders(id)
      dispatch(updateUserOrders(order))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}
