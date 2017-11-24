import React from 'react'

import {Navigator} from './navigation'
import {Provider} from 'react-redux'
import {initialize} from './config/firebase'
import {createStore} from './config/redux'

export default () => {
  initialize()
  const store = createStore()
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}
