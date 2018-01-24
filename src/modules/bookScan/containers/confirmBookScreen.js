import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { connect } from 'react-redux'

import { ConfirmBook } from '../components/confirmBook'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { searchIsbn } from '../../../services/book'

class BookScannerContainer extends Component {
  static navigationOptions = {
    title: 'Sell your book',
    header: null
  }

  // static propTypes = {
  //   isbn: PropTypes.string.isRequired
  // }

  state={
    book: undefined
  }

  componentDidMount = async () => {
    // FIXME: Refactor this, this is a workaround-ZAO
    const isbn = this.props.isbn || this.props.navigation.state.params.isbn
    try {
      const book = await searchIsbn(isbn)
      this.setState({book})
    } catch (e) {
      Alert.alert(
        '',
        'ISBN Not Found',
        [
          {text: 'Ok', onPress: this.goBack}
        ]
      )
    }
  }

  render () {
    return (
      (typeof this.state.book === 'undefined')
        ? <LoadingOverlay isLoading><View /></LoadingOverlay>
        : <ConfirmBook
          book={this.state.book}
          navigateBack={this.goBack}
          navigateToShoppingBag={this.navigateTo('ShoppingBag')}
          onPressSell={() => console.warn('hello :D')}
          onPressDonate={() => console.warn('hello :D')}
          onPressBallardsClub={() => console.warn('hello :D')}
        />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
  goBack = () => this.props.navigation.goBack()
}

export const ConfirmBookScreen = connect(null)(BookScannerContainer)
