import React from 'react'
import { Provider } from 'react-redux'
import { Navigator } from './navigation'
import { getUserProfileAction } from './redux/actions/async'
import {
  featuredBooks,
  recentlyAddedBooks
} from './services/backend/bookService'
import {
  updateFeaturedBooks,
  updateRecentlyAddedBooks
} from './redux/actions/sync/bookActions'
import SplashScreen from 'react-native-splash-screen'
import { currentUser } from './services/firebase/authentication'

export class App extends React.Component {
  async fetchBooks() {
    const { dispatch } = this.props.store
    const [recently, featured] = await Promise.all([
      recentlyAddedBooks(),
      featuredBooks()
    ])

    dispatch(updateRecentlyAddedBooks(recently))
    dispatch(updateFeaturedBooks(featured))
  }

  async checkIfThereIsUserLoggedIn() {
    const { dispatch } = this.props.store
    const user = await currentUser()
    if (user) {
      dispatch(getUserProfileAction(user))
    }
  }

  async componentDidMount() {
    await Promise.all([
      this.fetchBooks(),
      this.checkIfThereIsUserLoggedIn()
    ])
    SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Navigator />
      </Provider>
    )
  }
}
