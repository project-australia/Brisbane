import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { getQuoteAction } from '../../../redux/actions/async/bookActions'
import { styles } from './styles/bookScanner.style'
import { Scanner } from '../components/scanner'

class bookScanner extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired
  }

  navigateToBookSelling = () => this.props.navigation.navigate('BookSelling', {})

  render () {
    return (
      <View style={styles.container}>
        <Scanner
          getQuote={this.props.getQuote}
          showBook={this.navigateToBookSelling}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getQuote: isbn => dispatch(getQuoteAction(isbn))
})

export const bookScannerScreen = connect(null, mapDispatchToProps)(bookScanner)
