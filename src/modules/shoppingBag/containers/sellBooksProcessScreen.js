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

class SellBooksProcessContainer extends Component {
  static propTypes = {
    cleanShoppingBagByType: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    booksToSell: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
  }

  static navigationOptions = {
    title: 'Sell Books',
    header: null
  }

  state = {
    isLoading: false
  }

  render() {
    return (
      <SellBooksProcess
        books={this.props.booksToSell}
        isLoading={this.state.isLoading}
        navigateBack={() => this.props.navigation.goBack()}
        totalPrice={this.props.total}
      />
    )
  }
}

const mapStateToProps = state => {
  const { authentication } = state
  const { user } = authentication
  const booksToSell = sellingItems(state)

  return {
    booksToSell,
    user,
    total: shoppingBagSellingTotal(state),
    totalWeight: calculateTotalWeight(booksToSell)
  }
}

const mapDispatchtoProps = dispatch => ({
  cleanShoppingBagByType: type => dispatch(removeAllFromShoppingBag(type))
})

export const SellBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchtoProps
)(SellBooksProcessContainer)
