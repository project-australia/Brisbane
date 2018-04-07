export const NOT_LOGGED_IN = {
  id: null,
  referId: null,
  referredBy: null,
  name: null,
  email: null,
  birthDate: null,
  telephone: null,
  school: null,
  club: null,
  role: null,
  address: {
    city: null,
    street: null,
    number: null,
    zipCode: null,
    state: null
  },
  wallet: {
    balance: null,
    status: null,
    paypalAccount: null
  },
  orders: [],
  network: []
}

export const NO_ALERTS = { showAlert: false, message: '' }

export const AUTH_INITIAL_STATE = {
  user: NOT_LOGGED_IN,
  alert: NO_ALERTS
}
