import React from 'react'
import {addNavigationHelpers, StackNavigator as Navigator} from 'react-navigation'

import Home from './modules/home/components/home'
import SignInScreen from './modules/authentication/containers/signInScreen'
import { connect } from 'react-redux'

export const initialRouteName = 'SignIn'
const stackNavigatorConfig = {initialRouteName}
const routeConfigs = {
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignInScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)

class Navigation extends React.Component {
  render () {
    const navigation = addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav,})

    return (
      <StackNavigator navigation={navigation} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export const ConnectedNavigation = connect(mapStateToProps)(Navigation)
