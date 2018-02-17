import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SellBooksProcess } from '../components/sellBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class ConfirmationScreenContainer extends Component {
  static navigationOptions = {
    title: 'Sell Books',
    header: null
  }

  state = {
    booksToSell: [],
    totalPrice: 230.0
  }

  render() {
    return (
      <SellBooksProcess
        booksToSell={this.state.booksToSell}
        navigateBack={this.goBack}
        totalPrice={this.state.totalPrice}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

ConfirmationScreenContainer.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

const mapStateToProps = state => ({ items: state.shoppingBag })

export const ConfirmationScreen = connect(mapStateToProps)(
  ConfirmationScreenContainer
)
