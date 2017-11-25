import React from 'react'

import {initializeFirebase} from './config/firebase'
import {createStore} from './config/redux'
import { App } from './app'

export default () => {
  initializeFirebase()
  return (<App store={createStore()}/>)
}
