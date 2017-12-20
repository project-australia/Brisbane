import { AUTH_INITIAL_STATE, NO_ALERTS, NOT_LOGGED_IN } from '../../../src/redux/reducers/authentication/constants'
import { reducers } from '../../../src/redux/reducers'
import * as FirebaseService from '../../../src/services/firebase/authentication'
import { extractActionFromThunk } from './reduxThunkMock'
import { signInAction, signUpAction } from '../../../src/redux/actions/async/authActions'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../src/constants/messages'
import { alertAction, showAlert, successRetrievedPassword } from '../../../src/redux/actions/sync/authActions'

jest.mock('../../../src/services/firebase/authentication')
jest.mock('react-native-camera', () => require.requireActual('../../__mocks__/react-native-camera').default)

describe('Authentication reducers', () => {
  const password = 'password'
  const email = 'email@email.com'
  const user = {uid: 'UID', emailVerified: false, phoneNumber: '123-456-7890', email}
  const authReducers = reducers.authentication

  it('should initial state be Non Logged in user with no alerts', async () => {
    const expectedInitialState = {
      user: NOT_LOGGED_IN,
      alert: NO_ALERTS
    }
    const state = authReducers(undefined, 'ANY_ACTION_I_DO_NOT_CARE')
    expect(state).toEqual(expectedInitialState)
  })

  it('should save user on state after sign in', async () => {
    FirebaseService.signInWithEmailAndPassword = jest.fn(() => Promise.resolve(user))
    const action = await extractActionFromThunk(signInAction, email, password)
    const state = authReducers(AUTH_INITIAL_STATE, action)
    expect(state).toEqual({...AUTH_INITIAL_STATE, user})
  })

  it('should not signin after signup', async () => {
    FirebaseService.createUserWithEmailAndPassword = jest.fn(() => Promise.resolve())
    const action = await extractActionFromThunk(signUpAction, email, password)
    const state = authReducers(AUTH_INITIAL_STATE, action)
    expect(state).toEqual(AUTH_INITIAL_STATE)
  })

  it('should show a message after successfully recover password', async () => {
    FirebaseService.sendPasswordResetEmail = jest.fn(() => Promise.resolve())
    const expectedInitialState = {
      user: NOT_LOGGED_IN,
      alert: {showAlert: true, message: FORGOT_PASSWORD_SUCCESS_MSG}
    }
    const action = successRetrievedPassword(FORGOT_PASSWORD_SUCCESS_MSG)
    const state = authReducers(AUTH_INITIAL_STATE, action)
    expect(state).toEqual(expectedInitialState)
  })

  it('should show alert message', () => {
    const message = 'A simple message'
    const expectedState = {
      ...AUTH_INITIAL_STATE,
      alert: {showAlert: true, message}
    }
    const action = showAlert(message)
    const state = authReducers(AUTH_INITIAL_STATE, action)
    expect(state).toEqual(expectedState)
  })

  it('should show alert message when authentication fails', () => {
    const message = 'A simple message'
    const error = { error: 'foo', message }
    const expectedState = {
      ...AUTH_INITIAL_STATE,
      alert: {showAlert: true, message}
    }
    const action = alertAction(error)
    const state = authReducers(AUTH_INITIAL_STATE, action)
    expect(state).toEqual(expectedState)
  })
})
