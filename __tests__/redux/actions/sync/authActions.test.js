import {
  alertAction,
  showAlert,
  signInSuccess,
  signUpSuccess,
  successRetrievedPassword
} from '../../../../src/redux/actions/sync/authActions'
import {
  AUTH_FAILED_ALERT,
  FORGOT_PASSWORD_SUCCESS,
  SHOW_ALERT,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS
} from '../../../../src/redux/types/authTypes'

describe('Auth sync actions', () => {
  it('Should send a sucessfull forgot password action', async () => {
    const message = 'successfull message'
    const expectedAction = { type: FORGOT_PASSWORD_SUCCESS, message }
    const action = successRetrievedPassword(message)
    expect(action).toEqual(expectedAction)
  })

  it('Should create show alert action', async () => {
    const message = 'successfull message'
    const expectedAction = { type: SHOW_ALERT, message }
    const action = showAlert(message)
    expect(action).toEqual(expectedAction)
  })

  it('Should send a sucessfull signup action', async () => {
    const expectedAction = { type: SIGN_UP_SUCCESS }
    const action = signUpSuccess()
    expect(action).toEqual(expectedAction)
  })

  it('Should send a sucessfull signin action', async () => {
    const user = {
      uid: 'UID',
      emailVerified: false,
      email: 'duduzinho_do_funk@yahoo.com',
      phoneNumber: '123-456-7890'
    }
    const expectedAction = { type: SIGN_IN_SUCCESS, user }
    const action = signInSuccess(user)
    expect(action).toEqual(expectedAction)
  })

  it('Should send an alert message', async () => {
    const error = { message: 'Error Message' }
    const action = alertAction(error)
    const expectedAction = {
      type: AUTH_FAILED_ALERT,
      message: error.message
    }

    expect(action).toEqual(expectedAction)
  })
})
