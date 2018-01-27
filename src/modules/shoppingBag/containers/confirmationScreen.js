import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SellBooksProcess } from '../components/sellBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

const booksToSell = [
  {
    id: '12347',
    book: {
      id: '345345',
      imageUri: 'https://www.fillmurray.com/200/300',
      title: 'Book Name 1',
      author: 'Book Author',
      edition: '3rd edition',
      aboutBook: '',
      sellPrice: 12.97
    },
    quantity: 1,
    type: 'SELL'
  },
  {
    id: '12348',
    book: {
      id: '3445',
      imageUri: 'https://www.fillmurray.com/100/150',
      title: 'Book with a really big name that will extrapolate the title line',
      author: 'Book Author also with a big name that should break line',
      edition: '3rd edition',
      aboutBook: '',
      sellPrice: 0
    },
    quantity: 2,
    type: 'DONATE'
  }
]

class ConfirmationScreenContainer extends Component {
  static navigationOptions = {
    title: 'Sell Books',
    header: null
  }

  state = {
    booksToSell: booksToSell,
    totalPrice: 230.00
  }

  render () {
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

export const ConfirmationScreen = connect(mapStateToProps)(ConfirmationScreenContainer)
