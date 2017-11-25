import {StackNavigator as Navigator} from 'react-navigation'

import {Home} from '../modules/home/components/home'
import {SignInScreen} from '../modules/authentication/containers/signInContainer'
import {SignUpScreen} from '../modules/authentication/containers/signUpScreen'
import {ForgotPasswordScreen} from '../modules/authentication/containers/forgotPasswordScreen'

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
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
