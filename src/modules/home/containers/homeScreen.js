import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Home } from '../components/home'
import { booksStub } from '../../../stubs/books'

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  static propTypes = {
    displayName: PropTypes.string,
    navigation: PropTypes.object.isRequired
  }

  render () {
    const userName = this.props.displayName || 'Guest'
    return (
      <Home
        userName={userName}
        featuredBooks={booksStub}
        searchBook={(isbn) => this.props.navigation.navigate('BookSelling', {isbn})}
        recentlyAddedBooks={booksStub}
        onRecentlyAddedPressed={this.navigateTo('BookList')}
        onFeaturedPressed={this.navigateTo('BookList')}
        navigateToScan={this.navigateTo('BookScanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
}

const mapStateToProps = ({ authentication: { user } }) => ({
  displayName: user.name
})

export const HomeScreen = connect(mapStateToProps)(HomeContainer)
