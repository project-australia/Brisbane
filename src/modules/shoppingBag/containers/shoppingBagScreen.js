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
import {
  cleanWholeShoppingBag,
  removeFromShoppingBag
} from '../../../redux/actions'

class ShoppingBagContainer extends Component {
  static navigationOptions = {
    title: 'Shopping cart',
    header: null
  }

  state = {
    navRightIcons: [
      {
        name: 'cart-off',
        onPress: () => this.props.emptyShoppingBag()
      }
    ]
  }

  render() {
    return (
      <ShoppingBag
        booksToBuy={this.props.booksToBuy}
        booksToSell={this.props.booksToSell}
        navigateBack={this.navigateToHome}
        navigateToHome={this.navigateToHome}
        navigateToSellCheckout={this.navigateToSellCheckout}
        navigateToBuyCheckout={this.navigateToBuyCheckout}
        totalBuyingPrice={this.props.totalBuyingPrice}
        removeItemFromShoppingBag={this.props.removeItemFromShoppingBag}
        totalSellingPrice={this.props.totalSellingPrice}
        navRightIcons={this.state.navRightIcons}
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
  removeItemFromShoppingBag: PropTypes.func.isRequired,
  totalBuyingPrice: PropTypes.number.isRequired,
  totalSellingPrice: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  booksToBuy: buyingItems(state),
  booksToSell: sellingItems(state),
  totalBuyingPrice: shoppingBagBuyingTotal(state),
  totalSellingPrice: shoppingBagSellingTotal(state)
})

const mapDispatchToProps = dispatch => ({
  emptyShoppingBag: () => dispatch(cleanWholeShoppingBag()),
  removeItemFromShoppingBag: book => dispatch(removeFromShoppingBag(book))
})

export const ShoppingBagScreen = connect(mapStateToProps, mapDispatchToProps)(
  ShoppingBagContainer
)
