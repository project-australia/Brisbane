import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyBook, rentBook, sellBook } from '../../../redux/actions'
import { findBookByISBN } from '../../../services/backend/bookService'
import { book } from '../../home/propTypes/book'

import { BookDetails } from '../components/confirmBook'

class BookScannerContainer extends Component {
  state = {
    book: null,
    screenType: 'BUY'
  }

  static navigationOptions = {
    title: 'Book Details',
    header: null
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    buyBook: PropTypes.func.isRequired,
    rentBook: PropTypes.func.isRequired,
    sellBook: PropTypes.func.isRequired,
  }

  componentDidMount = async () => {
    const { book, isbn, screenType } = this.props.navigation.state.params

    if (book) {
      this.setState({book, screenType})
    } else {
      try {
        const book = await findBookByISBN(isbn)
        this.setState({book, screenType})
        console.log('book', book)
      } catch (err) {
        this.onError(err)
      }
    }
  }

  onError = (err) => {
    alert('Erro during searching for a book')
    this.goBack()
  }

  goBack = () => this.props.navigation.goBack()

  navigateToShoppingBag = () => {
    this.props.navigation.navigate('ShoppingBag', {})
  }

  toShoppingBag = callback => {
    callback(this.state.book)
    this.navigateToShoppingBag()
  }

  render () {
    const { book, screenType } = this.state

    if (!book) {
      return null
    }

    return (
      <BookDetails
        book={book}
        navigateBack={this.goBack}
        navigateToShoppingBag={() => this.navigateToShoppingBag()}
        onPressBallardsClub={() => console.warn('Ballards club :D')}
        onPressBuy={() => this.toShoppingBag(this.props.buyBook)}
        onPressDonate={book => this.props.rentBook(book)}
        onPressSell={book => this.props.sellBook(book)}
        screenType={screenType}
      />
    )
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
