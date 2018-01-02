import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Scanner } from '../components/scanner'

class BookScanner extends Component {
  navigateToBookSelling = isbn => this.props.navigation.navigate('BookSelling', {isbn})

  render () {
    return (
      <Scanner
        showBook={this.navigateToBookSelling}
      />
    )
  }
}

export const BookScannerScreen = connect(null, null)(BookScanner)
