import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { ConfirmBook } from '../components/confirmBook'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { searchIsbn } from '../../../services/book'

class BookScannerContainer extends Component {
  static navigationOptions = {
    title: 'Book Details',
    header: null
  }

  static defaultProps = {
    screenType: 'SELL'
  }

  static propTypes = {
    book: book,
    screenType: PropTypes.oneOf(['SELL', 'BUY']).isRequired
  }

  // componentDidMount = async () => {
  //   // FIXME: Refactor this, this is a workaround-ZAO
  //   const isbn = this.props.isbn || this.props.navigation.state.params.isbn
  //   try {
  //     const book = await searchIsbn(isbn)
  //     this.setState({ book })
  //   } catch (e) {
  //     Alert.alert('', 'ISBN Not Found', [{ text: 'Ok', onPress: this.goBack }])
  //   }
  // }

  render () {
    const book = this.props.book || this.props.navigation.state.params.book
    return (
      <ConfirmBook
        book={book}
        navigateBack={this.goBack}
        screenType={this.props.screenType}
        onPressSell={() => console.warn('hello :D')}
        onPressDonate={() => console.warn('hello :D')}
        onPressBallardsClub={() => console.warn('hello :D')}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
  goBack = () => this.props.navigation.goBack()
}

export const BookDetails = BookScannerContainer
