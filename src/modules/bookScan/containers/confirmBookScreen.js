import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ConfirmBook } from '../components/confirmBook'
import { searchIsbn } from '../../../services/book'

class bookScanner extends Component {
  static navigationOptions = {
    title: 'Sell your book',
    header: null
  }

  static propTypes = {
    isbn: PropTypes.string.isRequired
  }

  state = {
    book: {
      id: 0,
      imageUri: '',
      title: '',
      author: '',
      edition: '',
      aboutBook: '',
      sellPrice: 0
    }
  }

  componentDidMount = async () => {
    // FIXME: Refactor this, this is a workaround-ZAO
    const isbn = this.props.isbn || this.props.navigation.state.params.isbn
    try {
      const book = await searchIsbn(isbn)
      this.setState({book})
    } catch (e) {
      alert(`ISBN ${isbn} Not Found`)
    }
  }

  render () {
    return (
      <ConfirmBook
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

export const confirmBookScreen = connect(null)(bookScanner)
