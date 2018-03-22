import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Scanner } from '../components/scanner'

class BookScanner extends Component {
  static navigationOptions = {
    title: 'Book Scan'
  }

  state = {
    isReading: false,
    isbn: null
  }

  onRead = isbn => {
    if (!this.state.isReading) {
      this.setState({ isReading: true })
      this.navigateToBookDetails(isbn)
      this.setState({ isReading: false })
    }
  }

  navigateToBookDetails = (isbn) => this.props.navigation.navigate('BookDetails', {
    isbn,
    screenType: 'SELL'
  })

  render() {
    return <Scanner onRead={this.onRead} isLoading={this.state.isReading} />
  }
}

export const BookScannerScreen = connect(null, null)(BookScanner)
