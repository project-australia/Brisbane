import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Home } from '../components/home'

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  static propTypes = {
    displayName: PropTypes.string,
    navigation: PropTypes.object.isRequired
  }
  handleListBooksToHome = booksList => {
    return booksList.slice(0, 5)
  }

  render () {
    const userName = this.props.displayName || 'Guest'
    return (
      <Home
        userName={userName}
        featuredBooks={this.handleListBooksToHome(
          this.props.booksLists['featured']
        )}
        searchBook={isbn =>
          this.props.navigation.navigate('BookDetails', { isbn })
        }
        recentlyAddedBooks={this.handleListBooksToHome(
          this.props.booksLists['recent']
        )}
        onRecentlyAddedPressed={this.navigateTo('BookList', {
          typeList: 'recent'
        })}
        onFeaturedPressed={this.navigateTo('BookList', {
          typeList: 'featured'
        })}
        navigateToScan={this.navigateTo('BookScanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
        navigation={this.props.navigation}
      />
    )
  }

  navigateTo = (screen, param = {}) => () =>
    this.props.navigation.navigate(screen, param)
}

const mapStateToProps = ({ authentication: { user }, books }) => ({
  displayName: user.name,
  booksLists: books
})

export const HomeScreen = connect(mapStateToProps)(HomeContainer)
