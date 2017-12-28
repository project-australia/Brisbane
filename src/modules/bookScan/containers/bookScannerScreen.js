import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuoteAction } from '../../../redux/actions'
import { Scanner } from '../components/scanner'

class BookScanner extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired
  }

  navigateToBookSelling = () => this.props.navigation.navigate('BookSelling', {})

  render () {
    return (
      <Scanner
        getQuote={this.props.getQuote}
        showBook={this.navigateToBookSelling}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getQuote: isbn => dispatch(getQuoteAction(isbn))
})

export const BookScannerScreen = connect(null, mapDispatchToProps)(BookScanner)
