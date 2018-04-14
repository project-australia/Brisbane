import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Alert, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { buyBook, rentBook, sellBook } from '../../../redux/actions'
import {
  evaluateBookByISBN,
  findBookByISBN
} from '../../../services/backend/bookService'

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

  handleBackButtonClick = () => {
    this.goBack()
    return true
  }

  componentWillMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    )
  }

  componentDidMount = async () => {
    const { book, isbn, screenType } = this.props.navigation.state.params

    if (book) {
      this.setState({ book, screenType })
    } else {
      try {
        const book =
          screenType === 'SELL'
            ? await evaluateBookByISBN(isbn)
            : await findBookByISBN(isbn)
        this.setState({ book, screenType })
      } catch (err) {
        this.onError(err)
      }
    }
  }

  onError = () => {
    Alert.alert(
      'Searching Book',
      'No book match with your search',
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

  setConditionAndAddToShoppingBag = book => {
    this.props.sellBook(book)
    this.navigateToShoppingBag()
  }

  toShoppingBag = callback => {
    callback(this.state.book)
    this.navigateToShoppingBag()
  }

  get isUndesiredBook() {
    const { screenType } = this.props.navigation.state.params
    const { sell } = this.state.book.prices
    return screenType === 'SELL' && (sell === undefined || sell === null)
  }

  render() {
    const { book, screenType } = this.state
    return (
      book && (
        <BookDetails
          membershipStatus={this.props.userClub}
          book={book}
          isUndesiredBook={this.isUndesiredBook}
          navigateBack={this.goBack}
          navigateToShoppingBag={this.navigateToShoppingBag}
          onPressBallardsClub={this.navigateToClubMember}
          onPressBuy={() => this.toShoppingBag(this.props.buyBook)}
          onPressRent={() => this.toShoppingBag(this.props.rentBook)}
          onPressSell={this.setConditionAndAddToShoppingBag}
          screenType={screenType}
        />
      )
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBook: book => dispatch(buyBook(book)),
    rentBook: book => dispatch(rentBook(book)),
    sellBook: book => dispatch(sellBook(book))
  }
}

const mapStateToProps = ({ authentication: { user } }) => ({
  userClub: user.club
})

export const BookDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(
  BookScannerContainer
)
