import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyBook, rentBook, sellBook } from '../../../redux/actions'
import { book } from '../../home/propTypes/book'

import { BookDetails } from '../components/confirmBook'

class BookScannerContainer extends Component {
  static navigationOptions = {
    title: 'Book Details',
    header: null
  }

  static defaultProps = {
    screenType: 'BUY'
  }

  static propTypes = {
    book: book,
    screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired
  }

  render () {
    const book = this.props.book || this.props.navigation.state.params.book
    const screenType =
      this.props.navigation.state.params.screenType || this.props.screenType

    return (
      <BookDetails
        book={book}
        screenType={screenType}
        navigateBack={this.goBack}
        onPressSell={this.props.sellBook}
        onPressBuy={() => this.toShoppingBag(this.props.buyBook)}
        onPressDonate={book => this.props.rentBook(book)}
        onPressBallardsClub={() => console.warn('Ballard club :D')}
        navigateToShoppingBag={() => this.navigateToShoppingBag()}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToShoppingBag = () => {
    this.props.navigation.navigate('ShoppingBag', {})
  }
  toShoppingBag = callback => {
    const book = this.props.book || this.props.navigation.state.params.book
    callback(book)
    this.navigateToShoppingBag()
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => {
  return {
    buyBook: book => dispatch(buyBook(book)),
    rentBook: book => dispatch(rentBook(book)),
    sellBook: book => dispatch(sellBook(sellBook))
  }
}
export const BookDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(
  BookScannerContainer
)
