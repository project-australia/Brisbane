import {StackNavigator} from 'react-navigation'

import Home from './modules/home/components/home'
import SignInScreen from './modules/authentication/containers/signInScreen'

const stackNavigatorConfig = {
  initialRouteName: 'SignIn'
}

const routeConfigs = {
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignInScreen
  }
}

export const Router = StackNavigator(routeConfigs, stackNavigatorConfig)
