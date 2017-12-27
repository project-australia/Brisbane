import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

import Camera from 'react-native-camera'

import { getQuoteAction } from '../../../redux/actions/async/bookActions'

import { styles } from './styles/bookScanner.style'

class bookScanner extends Component {
  getSellingPrice = (isbn) => {
    this.props.getQuote(isbn)
    this.props.navigation.navigate('BookSelling', {})
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.scanner}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={e => this.getSellingPrice(e.data)}
        />
      </View>
    )
  }
}

bookScanner.propTypes = {
  getQuote: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  getQuote: isbn => dispatch(getQuoteAction(isbn))
})

export const bookScannerScreen = connect(null, mapDispatchToProps)(bookScanner)
