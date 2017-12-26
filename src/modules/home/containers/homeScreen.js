import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Home } from '../components/home'
import { booksStub } from '../../../stubs/books'
import { buy, rent } from '../../../redux/actions'

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  static propTypes = {
    displayName: PropTypes.string,
    navigation: PropTypes.object.isRequired,
    buyBook: PropTypes.func.isRequired,
    rentBook: PropTypes.func.isRequired
  }

  render () {
    return (
      <Home
        userName={this.props.displayName}
        featuredBooks={booksStub}
        searchBook={() => alert('search book')}
        recentlyAddedBooks={booksStub}
        onRecentlyAddedPressed={() =>
          alert('🛶 navigate to recently added books list')
        }
        onFeaturedPressed={() => alert('🛶 navigate to featured books list')}
        navigateToScan={this.navigateTo('BookScanner')}
        navigateToProfile={this.navigateTo('Profile')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
        onBuyBook={this.props.buyBook}
        onRentBook={this.props.rentBook}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
}

const mapStateToProps = ({ authentication: { user } }) => ({
  displayName: user.displayName
})

const mapDispatchToProps = dispatch => ({
  buyBook: item => dispatch(buy(item)),
  rentBook: item => dispatch(rent(item))
})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(
  HomeContainer
)
