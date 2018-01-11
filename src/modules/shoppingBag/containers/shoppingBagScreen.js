import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingBag } from '../components/shoppingBag'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class ShoppingBagContainer extends Component {
  static navigationOptions = {
    title: 'Shopping cart',
    header: null
  }

  state = {
    booksToBuy: [
      {
        id: '12345',
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
        type: 'BUY'
      },
      {
        id: '12346',
        book: {
          id: '3445',
          imageUri: 'https://www.fillmurray.com/100/150',
          title: 'Book with a really big name that will extrapolate the title line',
          author: 'Book Author also with a big name that should break line',
          edition: '3rd edition',
          aboutBook: '',
          sellPrice: 33.55
        },
        quantity: 2,
        type: 'RENT'
      }
    ],
    booksToSell: [
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
  }

  render () {
    return (
      <ShoppingBag
        booksToBuy={this.state.booksToBuy}
        booksToSell={this.state.booksToSell}
        navigateBack={this.goBack}
        searchBook={() => alert('search book')}
        onScanPress={() => this.props.navigation.navigate('BookScanner', {})}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

ShoppingBagContainer.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

const mapStateToProps = state => ({ items: state.shoppingBag })

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
