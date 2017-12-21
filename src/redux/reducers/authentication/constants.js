export const NOT_LOGGED_IN = {
  uid: null,
  email: null,
  phoneNumber: null,
  emailVerified: false,
  displayName: undefined
}
export const NO_ALERTS = { showAlert: false, message: '' }

export const AUTH_INITIAL_STATE = {
  user: NOT_LOGGED_IN,
  alert: NO_ALERTS
}
