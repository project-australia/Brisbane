import React from 'react'
import {Provider} from 'react-redux'
import {Navigator} from './navigation'

export const App = ({store}) => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}
