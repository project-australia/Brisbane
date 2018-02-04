import { StackNavigator as Navigator } from 'react-navigation'

import { authenticated } from '../modules/shared/decorators/authenticated'
import { BookDetailsScreen } from '../modules/bookScan/containers/bookDetailsScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'
import { BookScannerScreen } from '../modules/bookScan/containers/bookScannerScreen'
import { BuyBooksProcessScreen } from '../modules/shoppingBag/containers/buyBooksProcessScreen'
import { ConfirmationScreen } from '../modules/shoppingBag/containers/confirmationScreen'
import { ForgotPasswordScreen } from '../modules/authentication/containers/forgotPasswordScreen'
import { HomeScreen } from '../modules/home/containers/homeScreen'
import { ManageAccountScreen } from '../modules/account/containers/manageAccountScreen'
import { NetworkMembersScreen } from '../modules/account/containers/networkMembersScreen'
import { ProfileScreen } from '../modules/account/containers/profileScreen'
import { ShoppingBagScreen } from '../modules/shoppingBag/containers/shoppingBagScreen'
import { SignInScreen } from '../modules/authentication/containers/signInScreen'
import { SignUpScreen } from '../modules/authentication/containers/signUpScreen'
import { TestScreen } from '../modules/test/components/testScreen'

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
  BookDetails: {
    screen: BookDetailsScreen
  },
  ShoppingBag: {
    screen: ShoppingBagScreen
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen
  },
  BuyBooksProcess: {
    screen: authenticated(BuyBooksProcessScreen)
  },
  BookList: {
    screen: BookListScreen
  },
  NetworkMembers: {
    screen: NetworkMembersScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
