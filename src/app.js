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

const ONE_MINUTE = 60000

export class App extends React.Component {
  componentDidMount = async () => {
    try {
      this._asyncRequest = await Promise.all([this.fetchBooks(), this.checkIfThereIsUserLoggedIn()])
      this._asyncRequest = null
    } catch (e) {
      console.warn(e)
    } finally {
      SplashScreen.hide()
    }
  }

  componentWillMount() {
    this._intervalID = setInterval(this.fetchBooks, ONE_MINUTE)
  }

  componentWillUnmount() {
    if (this._intervalID) {
      clearInterval(this._intervalID)
    }
  }

  fetchBooks = async () => {
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
