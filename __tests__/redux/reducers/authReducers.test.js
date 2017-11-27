import {
  AUTH_INITIAL_STATE, authReducers, NO_ALERTS,
  USER_NOT_LOGGED_IN
} from '../../../src/redux/reducers/authReducers'
import * as FirebaseService from '../../../src/services/firebase/authentication'
import { extractActionFromThunk } from './reduxThunkMock'
import { signInAction } from '../../../src/redux/actions/async/authActions'
jest.mock('../../../src/services/firebase/authentication')

describe('Authentication reducers', () => {
  const password = 'password'
  const email = 'email@email.com'
  const user = {uid: 'UID', emailVerified: false, phoneNumber: '123-456-7890', email}

  it('should initial state be Non Logged in user with no alerts', async () => {
    const expectedInitialState = {
      user: USER_NOT_LOGGED_IN,
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
})