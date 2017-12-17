import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Home } from '../components/home'

const aBook = {image: 'bla', title: '', author: 'Talhate', id: '1'}
const anotherBook = {image: 'bla', title: '', author: 'Porto', id: '2'}

class HomeContainer extends Component<{}> {
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
