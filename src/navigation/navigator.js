import { StackNavigator as Navigator } from 'react-navigation'

import { TestScreen } from '../modules/test/components/testScreen'
import { authenticated } from '../modules/shared/decorators/authenticated'
import { SignInScreen } from '../modules/authentication/containers/signInScreen'
import { SignUpScreen } from '../modules/authentication/containers/signUpScreen'
import { ForgotPasswordScreen } from '../modules/authentication/containers/forgotPasswordScreen'
import { ProfileScreen } from '../modules/account/containers/profileScreen'
import { ManageAccountScreen } from '../modules/account/containers/manageAccountScreen'

export const initialRouteName = 'Test'
const stackNavigatorConfig = {initialRouteName}
const routeConfigs = {
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  },
  Test: {
    screen: TestScreen
  },
  Profile: {
    screen: authenticated(ProfileScreen)
  },
  ManageAccount: {
    screen: authenticated(ManageAccountScreen)
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
