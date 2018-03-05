import React from 'react'
import { BackHandler } from 'react-native'
import { Provider } from 'react-redux'
import { Navigator } from './navigation'
import {
  featuredBooks,
  recentlyAddedBooks
} from './services/backend/bookService'
import {
  updateFeaturedBooks,
  updateRecentlyAddedBooks
} from './redux/actions/sync/bookActions'
import SplashScreen from 'react-native-splash-screen'

export class App extends React.Component {
  handleBackButtonClick = () => {
    this.props.navigation.goBack()
    return true
  }

  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  async componentDidMount() {
    SplashScreen.hide()
    const [recently, featured] = await Promise.all([
      recentlyAddedBooks(),
      featuredBooks()
    ])
    const { dispatch } = this.props.store

    dispatch(updateRecentlyAddedBooks(recently))
    dispatch(updateFeaturedBooks(featured))
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Navigator />
      </Provider>
    )
  }
}
