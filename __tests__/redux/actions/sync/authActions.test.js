import { alertAction, signUpSuccess, successRetrievedPassword } from '../../../../src/redux/actions/sync/authActions'
import { ALERT_AUTH_FAILED, FORGOT_PASSWORD_SUCCESS, SIGN_UP_SUCCESS } from '../../../../src/redux/types/authTypes'

describe('Auth sync actions', () => {
  it('Should send a sucessfull forgot password action', async () => {
    const expectedAction = {type: FORGOT_PASSWORD_SUCCESS}
    const action = successRetrievedPassword()
    expect(action).toEqual(expectedAction)
  })

  it('Should send a sucessfull signup action', async () => {
    const expectedAction = {type: SIGN_UP_SUCCESS}
    const action = signUpSuccess()
    expect(action).toEqual(expectedAction)
  })

  it('Should send an alert message', async () => {
    const error = {message: 'Error Message'}
    const action = alertAction(error)
    const expectedAction = {
      type: ALERT_AUTH_FAILED,
      message: error.message
    }

    expect(action).toEqual(expectedAction)
  })
})
