import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Scanner } from '../components/scanner'

class BookScanner extends Component {
  static navigationOptions = {
    title: 'Book Scan'
  }
  navigateToBookSelling = isbn =>
    this.props.navigation.navigate('BookDetails', { isbn })

  render() {
    return <Scanner showBook={this.navigateToBookSelling} />
  }
}

export const BookScannerScreen = connect(null, null)(BookScanner)
