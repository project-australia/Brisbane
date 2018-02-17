import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { buyBook, rentBook, sellBook } from '../../../redux/actions'
import { findBookByISBN } from '../../../services/backend/bookService'

import { BookDetails } from '../components/confirmBook'

class BookScannerContainer extends Component {
  state = {
    book: null,
    club: '',
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
    sellBook: PropTypes.func.isRequired
  }

  componentDidMount = async () => {
    const { book, isbn, screenType } = this.props.navigation.state.params

    if (book) {
      this.setState({ book, screenType })
    } else {
      try {
        const book = await findBookByISBN(isbn)
        this.setState({ book, screenType })
      } catch (err) {
        this.onError(err)
      }
    }
  }

  onError = err => {
    Alert.alert(
      'Searching Book',
      err.message,
      [{ text: 'Ok', onPress: () => this.goBack() }],
      {
        onDismiss: () => this.goBack()
      }
    )
  }

  goBack = () => this.props.navigation.goBack()

  navigateToShoppingBag = () => {
    this.props.navigation.navigate('ShoppingBag', {})
  }

  navigateToClubMember = () => {
    this.props.navigation.navigate('ClubMembership')
  }

  toShoppingBag = callback => {
    callback(this.state.book)
    this.navigateToShoppingBag()
  }

  render () {
    const { book, screenType } = this.state
    return (
      book && (
        <BookDetails
          membershipStatus={this.state.club}
          book={book}
          navigateBack={this.goBack}
          navigateToShoppingBag={this.navigateToShoppingBag}
          onPressBallardsClub={this.navigateToClubMember}
          onPressBuy={() => this.toShoppingBag(this.props.buyBook)}
          onPressDonate={() => this.toShoppingBag(this.props.sellBook)}
          onPressRent={() => this.toShoppingBag(this.props.buyBook)}
          onPressSell={() => this.toShoppingBag(this.props.sellBook)}
          screenType={screenType}
        />
      )
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => {
  return {
    buyBook: book => dispatch(buyBook(book)),
    rentBook: book => dispatch(rentBook(book)),
    sellBook: book => dispatch(sellBook(book))
  }
}

export const BookDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(
  BookScannerContainer
)
