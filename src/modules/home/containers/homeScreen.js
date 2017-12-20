import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Home } from '../components/home'

const aBook = {
  id: '1',
  image: 'bla',
  title: 'Calculus',
  author: 'Stewart, James',
  edition: '8th edition'
}
const anotherBook = {
  id: '2',
  image: 'bla',
  title: 'Papercraft',
  author: 'Bright, Gordon',
  edition: '2nd edition'
}

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
        featuredBooks={[aBook, anotherBook]}
        searchBook={() => alert('search book')}
        recentlyAddedBooks={[aBook, anotherBook]}
        onRecentlyAddedPressed={() => alert('🛶 navigate to recently added books list')}
        onFeaturedPressed={() => alert('🛶 navigate to featured books list')}
        navigateToScan={this.navigateTo('Scanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingCart')}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
}

const mapStateToProps = ({authentication: {user}}) => ({displayName: user.displayName})

const mapDispatchToProps = () => ({})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
