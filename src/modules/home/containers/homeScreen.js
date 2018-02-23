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

  navigateTo = (screen, param = {}) => () =>
    this.props.navigation.navigate(screen, param)

  navigateToSearchForBook = isbn => {
    this.props.navigation.navigate('BookDetails', {
      isbn,
      screenType: 'SELL'
    })
  }

  navigateToSellBook = (isbn) => {
    this.props.navigation.navigate('BookDetails', {
      isbn,
      screenType: 'SELL'
    })
  }

  getDisplayName = () => {
    const name = this.props.displayName
    if (name) {
      return name.split(' ')
    }
    return 'Guest'
  }

  firstFivesElementsOf = booksList => booksList.slice(0, 5)

  render() {
    const userName = this.getDisplayName()
    const { booksLists } = this.props
    return (
      <Home
        userName={userName}
        featuredBooks={this.firstFivesElementsOf(booksLists['featured'])}
        recentlyAddedBooks={this.firstFivesElementsOf(booksLists['recent'])}
        navigateToScan={this.navigateTo('BookScanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
        navigateToSellBook={(isbn) => this.navigateToSellBook(isbn)}
        navigation={this.props.navigation}
        searchBook={this.navigateToSearchForBook}
        onRecentlyAddedPressed={this.navigateTo('BookList', {
          typeList: 'recent'
        })}
        onFeaturedPressed={this.navigateTo('BookList', {
          typeList: 'featured'
        })}
      />
    )
  }
}

const mapStateToProps = ({ authentication: { user }, books }) => ({
  displayName: user.name,
  wallet: user.wallet,
  booksLists: books
})

export const HomeScreen = connect(mapStateToProps)(HomeContainer)
