import React, { Component } from 'react'
import Camera from 'react-native-camera'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { styles } from './styles/bookScanner.style'

export class Scanner extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired,
    showBook: PropTypes.func.isRequired
  }

  getSellingPrice = (isbn) => {
    this.props.getQuote(isbn)
    this.props.showBook()
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
