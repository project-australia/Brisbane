import { StackNavigator as Navigator } from 'react-navigation'
import { ClubMembershipScreen } from '../modules/account/containers/clubMemberScreen'

import { authenticated } from '../modules/shared/decorators/authenticated'
import { BookDetailsScreen } from '../modules/bookScan/containers/bookDetailsScreen'
import { BookListScreen } from '../modules/bookList/containers/bookListScreen'
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
  NetworkMembers: {
    screen: NetworkMembersScreen
  },
  MyOrders: {
    screen: MyOrdersScreen
  },
  ClubMembership: {
    screen: authenticated(ClubMembershipScreen),
    navigationOptions: { header: null }
  }
}

export const StackNavigator = Navigator(routeConfigs, stackNavigatorConfig)
