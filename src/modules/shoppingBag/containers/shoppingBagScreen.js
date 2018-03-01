import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  buyingItems,
  sellingItems,
  shoppingBagBuyingTotal,
  shoppingBagSellingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import { ShoppingBag } from '../components/shoppingBag'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class ShoppingBagContainer extends Component {
  static navigationOptions = {
    title: 'Shopping cart',
    header: null
  }

  render() {
    return (
      <ShoppingBag
        booksToBuy={this.props.booksToBuy}
        booksToSell={this.props.booksToSell}
        navigateBack={this.goBack}
        navigateToCheckout={this.navigateToCheckout}
        navigateToHome={this.navigateToHome}
        navigateToSellConfirmation={this.navigateToSellConfirmation}
        navigateToSellBooksProcess={this.navigateToSellBooksProcess}
        navigateToBuyBooksProcess={this.navigateToBuyBooksProcess}
        searchBook={() => alert('search book')}
        onScanPress={() => this.props.navigation.navigate('BookScanner', {})}
        totalBuyingPrice={this.props.totalBuyingPrice}
        totalSellingPrice={this.props.totalSellingPrice}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToSellConfirmation = () =>
    this.props.navigation.navigate('ConfirmationScreen')
  navigateToHome = () => this.props.navigation.navigate('Home')
  navigateToSellBooksProcess = () =>
    this.props.navigation.navigate('SellBooksProcess')
  navigateToBuyBooksProcess = () =>
    this.props.navigation.navigate('Checkout', { screenType: 'BUY' })
}

ShoppingBagContainer.propTypes = {
  booksToBuy: PropTypes.arrayOf(ShoppingBagItemPropType),
  totalBuyingPrice: PropTypes.number.isRequired,
  totalSellingPrice: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  booksToBuy: buyingItems(state),
  booksToSell: sellingItems(state),
  totalBuyingPrice: shoppingBagBuyingTotal(state),
  totalSellingPrice: shoppingBagSellingTotal(state)
})

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
