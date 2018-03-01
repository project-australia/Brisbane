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
        navigateToHome={this.navigateToHome}
        navigateToSellCheckout={this.navigateToSellCheckout}
        navigateToBuyCheckout={this.navigateToBuyCheckout}
        totalBuyingPrice={this.props.totalBuyingPrice}
        totalSellingPrice={this.props.totalSellingPrice}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToHome = () => this.props.navigation.navigate('Home')
  navigateToSellCheckout = () =>
    this.props.navigation.navigate('Checkout', { screenType: 'SELL' })
  navigateToBuyCheckout = () =>
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
