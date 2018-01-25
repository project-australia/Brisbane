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
    return (
      <Home
        userName={this.props.displayName}
        featuredBooks={booksStub}
        searchBook={(isbn) => this.props.navigation.navigate('BookSelling', {isbn})}
        recentlyAddedBooks={booksStub}
        onRecentlyAddedPressed={() =>
          alert('🛶 navigate to recently added books list')
        }
        onFeaturedPressed={() => alert('🛶 navigate to featured books list')}
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
