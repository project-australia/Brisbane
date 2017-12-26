import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import Scanner from './../components/scanner'
import { getQuoteAction } from '../../../redux/actions/async/bookActions'

import { styles } from './styles/bookScanner.style'

class bookScanner extends Component {

  getSellingPrice = (isbn) => {
    console.log('ISBN', isbn)
    this.props.getQuote(isbn)
  }

  render () {
    return (
      <View style={styles.container}>
        <Scanner getQuote={this.getSellingPrice} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getQuote: isbn => dispatch(getQuoteAction(isbn))
})

export const bookScannerScreen = connect(mapDispatchToProps)(bookScanner)
