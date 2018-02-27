import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  calculateTotalWeight,
  sellingItems,
  shoppingBagSellingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import { SellBooksProcess } from '../components/sellBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { confirmInPersonCheckout } from './shared/checkout'

class SellBooksProcessContainer extends Component {
  static propTypes = {
    cleanShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
  }

  static navigationOptions = {
    title: 'Sell Books',
    header: null
  }

  state = {
    isLoading: false,
    shippingMethod: 'IN_PERSON'
  }

  render() {
    return (
      <SellBooksProcess
        books={this.props.books}
        isLoading={this.state.isLoading}
        inPersonCheckout={() => confirmInPersonCheckout(this, 'SELL')}
        navigateBack={() => this.props.navigation.goBack()}
        totalPrice={this.props.total}
      />
    )
  }
}

const mapStateToProps = state => {
  const { authentication } = state
  const { user } = authentication
  const books = sellingItems(state)

  return {
    books,
    user,
    total: shoppingBagSellingTotal(state),
    totalWeight: calculateTotalWeight(books)
  }
}

const mapDispatchToProps = dispatch => ({
  cleanShoppingBag: () => dispatch(removeAllFromShoppingBag('SELL'))
})

export const SellBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SellBooksProcessContainer)
