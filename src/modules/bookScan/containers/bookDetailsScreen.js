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
    const screenType = this.props.screenType || this.props.navigation.state.params.screenType

    return (
      <BookDetails
        book={book}
        screenType={screenType}
        navigateBack={this.goBack}
        onPressSell={(book) => this.props.sellBook(book)}
        onPressBuy={(book) => this.props.buyBook(book)}
        onPressDonate={(book) => this.props.rentBook(book)}
        onPressBallardsClub={() => console.warn('Ballards club :D')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: (book) => dispatch(buyBook(book)),
    rentBook: (book) => dispatch(rentBook(book)),
    sellBook: (book) => dispatch(sellBook(sellBook))
  }
}
export const BookDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(BookScannerContainer)
