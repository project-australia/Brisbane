import { StackNavigator } from 'react-navigation'

import Home from './modules/home/components/Home'
import SignInScreen from './modules/authentication/containers/SignInScreen'

const stackNavigatorConfig = {
  initialRouteName: 'SignIn'
}

const routeConfigs = {
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignInScreen
  }
}

export default StackNavigator(routeConfigs, stackNavigatorConfig)
