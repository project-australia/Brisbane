import React from 'react'
import Router from './Router'
import { Provider } from 'react-redux'

import Firebase from './config/Firebase'
import Redux from './config/Redux'

export default () => {
  const store = Redux.createStore()
  Firebase.initialize()
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}
