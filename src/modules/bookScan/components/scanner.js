import Camera from 'react-native-camera'
import React, { Component } from 'react'
import { View } from 'react-native'

import {styles} from './styles/scanner.style'

export class Scanner extends Component {
  static propTypes = { style: View.propTypes.style }
  static defaultProps = { style: styles.scanner }
  onBarCodeRead = e => { alert(`Barcode Found! Type: ${e.type} \nData: ${e.data}`) }

  render () {
    return (
      <Camera
        style={this.props.style}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={this.onBarCodeRead}
      />
    )
  }
}
