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
import { BookDetails } from '../modules/bookScan/containers/bookDetailsScreen'
import { ShoppingBagScreen } from '../modules/shoppingBag/containers/shoppingBagScreen'
import { BuyBooksProcessScreen } from '../modules/shoppingBag/containers/buyBooksProcessScreen'
import { ConfirmationScreen } from '../modules/shoppingBag/containers/confirmationScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'
import { NetworkMembersScreen } from '../modules/account/containers/networkMembersScreen'

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
    screen: BookDetails
  },
  ShoppingBag: {
    screen: ShoppingBagScreen
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen
  },
  BuyBooksProcess: {
    screen: BuyBooksProcessScreen
  },
  BookList: {
    screen: BookListScreen
  },
  NetworkMembers: {
    screen: NetworkMembersScreen
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
