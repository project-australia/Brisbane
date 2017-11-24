import {StackNavigator as Navigator} from 'react-navigation'

import {Home} from '../modules/home/components/home'
import {SignInScreen} from '../modules/authentication/containers/signInScreen'
import {SignUpScreen} from '../modules/authentication/containers/signUpScreen'

export const initialRouteName = 'SignIn'
const stackNavigatorConfig = {initialRouteName}
const routeConfigs = {
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
