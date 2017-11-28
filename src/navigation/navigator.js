import {StackNavigator as Navigator} from 'react-navigation'

import {Home} from '../modules/home/components/home'
import {SignInScreen} from '../modules/authentication/containers/signInScreen'
import {SignUpScreen} from '../modules/authentication/containers/signUpScreen'
import {ForgotPasswordScreen} from '../modules/authentication/containers/forgotPasswordScreen'
import { authenticated } from '../modules/shared/containers/authenticatedScreen'

export const initialRouteName = 'SignIn'
const stackNavigatorConfig = {initialRouteName}
const routeConfigs = {
  Home: {
    screen: authenticated(Home)
  },
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
