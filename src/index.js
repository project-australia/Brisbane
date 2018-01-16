import React from 'react'

import { initializePaypalSDK } from './config/paypal'
import { initializeFirebase } from './config/firebase'
import { createStore } from './config/redux'
import { App } from './app'

export const BallardBooks = () => {
  initializePaypalSDK()
  initializeFirebase()

  return <App store={createStore()} />
}
