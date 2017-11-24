import {StackNavigator as Navigator} from 'react-navigation'

import Home from '../modules/home/components/home'
import SignInScreen from '../modules/authentication/containers/signInScreen'

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
