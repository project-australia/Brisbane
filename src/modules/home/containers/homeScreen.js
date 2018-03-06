import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackHandler } from 'react-native'
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

  handleBackButtonClick = () => {
    this.props.navigation.goBack()
    return true
  }

  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  navigateTo = (screen, param = {}) => () =>
    this.props.navigation.navigate(screen, param)

  navigateToBuyBook = isbn => {
    this.props.navigation.navigate('BookDetails', {
      isbn,
      screenType: 'BUY'
    })
  }

  navigateToSellBook = isbn => {
    this.props.navigation.navigate('BookDetails', {
      isbn,
      screenType: 'SELL'
    })
  }

  getDisplayName = () => {
    const name = this.props.displayName
    return name ? name.split(' ')[0] : 'Guest'
  }

  firstFivesElementsOf = booksList => booksList.slice(0, 5)

  render() {
    const userName = this.getDisplayName()
    const { booksLists } = this.props

    return (
      <Home
        userName={userName}
        featuredBooks={this.firstFivesElementsOf(booksLists.featured)}
        recentlyAddedBooks={this.firstFivesElementsOf(booksLists.recent)}
        navigateToScan={this.navigateTo('BookScanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
        navigateToSellBook={isbn => this.navigateToSellBook(isbn)}
        navigation={this.props.navigation}
        searchBook={isbn => this.navigateToBuyBook(isbn)}
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
