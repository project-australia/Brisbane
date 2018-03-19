import React from 'react'
import { Provider } from 'react-redux'
import { Navigator } from './navigation'
import { getUserProfileAction } from './redux/actions/async'
import { currentUserUid } from './services/firebase/authentication'
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
  async componentDidMount() {
    await Promise.all([this.fetchBooks(), this.checkIfThereIsUserLoggedIn()])
    SplashScreen.hide()
  }

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
    const uid = await currentUserUid()
    if (uid) {
      dispatch(getUserProfileAction(uid))
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Navigator />
      </Provider>
    )
  }
}
