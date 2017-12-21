import { StackNavigator as Navigator } from 'react-navigation'

import { TestScreen } from '../modules/test/components/testScreen'
import { HomeScreen } from '../modules/home/containers/homeScreen'
import { authenticated } from '../modules/shared/decorators/authenticated'
import { SignInScreen } from '../modules/authentication/containers/signInScreen'
import { SignUpScreen } from '../modules/authentication/containers/signUpScreen'
import { ForgotPasswordScreen } from '../modules/authentication/containers/forgotPasswordScreen'
import { ProfileScreen } from '../modules/account/containers/profileScreen'
import { ManageAccountScreen } from '../modules/account/containers/manageAccountScreen'
import { BookScanner } from '../modules/bookScan/components/bookScanner'

export const initialRouteName = __DEV__ ? 'Test' : 'Home'
const stackNavigatorConfig = {initialRouteName}
const routeConfigs = {
  Home: {
    screen: HomeScreen
  },
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
  },
  BookScanner: {
    screen: BookScanner
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
