import React from 'react'

import { App } from './app'
import { setUpConfigs } from './config'
import { createStore } from './config/redux'

export const BallardBooks = () => {
  setUpConfigs()

  return <App store={createStore()} />
}
