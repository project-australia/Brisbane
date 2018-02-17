import { StackNavigator as Navigator } from 'react-navigation'
import { ClubMembershipScreen } from '../modules/account/containers/clubMemberScreen'

import { authenticated } from '../modules/shared/decorators/authenticated'
import { BookDetailsScreen } from '../modules/bookScan/containers/bookDetailsScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'
import { BookScannerScreen } from '../modules/bookScan/containers/bookScannerScreen'
import { BuyBooksProcessScreen } from '../modules/shoppingBag/containers/buyBooksProcessScreen'
import { SellBooksProcessScreen } from '../modules/shoppingBag/containers/sellBooksProcessScreen'
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
    screen: authenticated(ProfileScreen),
    navigationOptions: { header: null }
  },
  ManageAccount: {
    screen: authenticated(ManageAccountScreen),
    navigationOptions: { header: null }
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
    screen: authenticated(BuyBooksProcessScreen),
    navigationOptions: { header: null }
  },
  SellBooksProcess: {
    screen: authenticated(SellBooksProcessScreen),
    navigationOptions: { header: null }
  },
  BookList: {
    screen: BookListScreen
  },
  NetworkMembers: {
    screen: NetworkMembersScreen
  },
  ClubMembership: {
    screen: authenticated(ClubMembershipScreen),
    navigationOptions: { header: null }
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
