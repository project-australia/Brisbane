import { StackNavigator as Navigator } from 'react-navigation'

import { TestScreen } from '../modules/test/components/testScreen'
import { HomeScreen } from '../modules/home/containers/homeScreen'
import { authenticated } from '../modules/shared/decorators/authenticated'
import { SignInScreen } from '../modules/authentication/containers/signInScreen'
import { SignUpScreen } from '../modules/authentication/containers/signUpScreen'
import { ForgotPasswordScreen } from '../modules/authentication/containers/forgotPasswordScreen'
import { ProfileScreen } from '../modules/account/containers/profileScreen'
import { ManageAccountScreen } from '../modules/account/containers/manageAccountScreen'
import { BookScannerScreen } from '../modules/bookScan/containers/bookScannerScreen'
import { ConfirmBookScreen } from '../modules/bookScan/containers/confirmBookScreen'
import { ShoppingBagScreen } from '../modules/shoppingBag/containers/shoppingBagScreen'
import { SellBooksProcessScreen } from '../modules/shoppingBag/containers/sellBooksProcessScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'

export const initialRouteName = __DEV__ ? 'Test' : 'Home'
const stackNavigatorConfig = { initialRouteName }
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
    screen: BookScannerScreen
  },
  BookSelling: {
    screen: ConfirmBookScreen
  },
  ShoppingBag: {
    screen: ShoppingBagScreen
  },
  SellBooksProcess: {
    screen: SellBooksProcessScreen
  },
  BookList: {
    screen: BookListScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
