import React from 'react'
import { NativeRouter, Route } from 'react-router-native'

import Home from './modules/home/components/Home'

export default class Router extends React.Component<{}> {
  render () {
    return (
      <NativeRouter>
        <Route exact path="/" component={Home}/>
      </NativeRouter>
    )
  }
}
