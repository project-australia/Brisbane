import { StackNavigator as Navigator } from 'react-navigation'
import { ClubMembershipScreen } from '../modules/account/containers/clubMemberScreen'

import { WebView } from '../modules/shared/components/webView'
import { authenticated } from '../modules/shared/decorators/authenticated'
import { BookDetailsScreen } from '../modules/bookScan/containers/bookDetailsScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'
import { BookListSearchScreen } from '../modules/bookList/containers/bookListSearchScreen'
import { BookScannerScreen } from '../modules/bookScan/containers/bookScannerScreen'
import { CheckoutScreen } from '../modules/shoppingBag/containers/checkoutScreen'
import { ForgotPasswordScreen } from '../modules/authentication/containers/forgotPasswordScreen'
import { HomeScreen } from '../modules/home/containers/homeScreen'
import { NetworkMembersScreen } from '../modules/account/containers/networkMembersScreen'
import { MyOrdersScreen } from '../modules/account/containers/myOrderScreen'
import { ProfileScreen } from '../modules/account/containers/profileScreen'
import { ShoppingBagScreen } from '../modules/shoppingBag/containers/shoppingBagScreen'
import { SignInScreen } from '../modules/authentication/containers/signInScreen'
import { SignUpScreen } from '../modules/authentication/containers/signUpScreen'
import { TestScreen } from '../modules/test/components/testScreen'

import { Values } from '../constants'

export const initialRouteName = __DEV__ ? 'Test' : 'Home'
const stackNavigatorConfig = {
  initialRouteName,
  ...Values.navBar.transparent
}
const routeConfigs = {
  Home: {
    screen: HomeScreen
  },
  SignIn: {
    screen: SignInScreen,
    ...Values.navBar.transparent
  },
  SignUp: {
    screen: SignUpScreen,
    ...Values.navBar.transparent
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: { title: 'Reset Password' }
  },
  Test: {
    screen: TestScreen
  },
  Profile: {
    screen: authenticated(ProfileScreen),
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
  Checkout: {
    screen: authenticated(CheckoutScreen),
    navigationOptions: CheckoutScreen.navigationOptions
  },
  BookList: {
    screen: BookListScreen
  },
  BookListSearch: {
    screen: BookListSearchScreen
  },
  NetworkMembers: {
    screen: NetworkMembersScreen
  },
  MyOrders: {
    screen: MyOrdersScreen
  },
  WebView: {
    screen: WebView
  },
  ClubMembership: {
    screen: ClubMembershipScreen,
    navigationOptions: { header: null }
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
