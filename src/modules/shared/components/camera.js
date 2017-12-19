import React, { Component } from 'react'
import Camera from 'react-native-camera'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/camera.style'

export class Scanner extends Component {
  static propTypes = {
    style: View.propTypes.style,
    children: PropTypes.element
  }
  static defaultProps = {
    style: styles.default
  }
  static aspect = Camera.constants.Aspect.fill

  onBarCodeRead = (e) => {
    alert(`Barcode Found! Type: ${e.type} \nData: ${e.dat}`)
  }

  render () {
    return (
      <Camera
        ref={cam => { this.camera = cam }}
        onBarCodeRead={this.onBarCodeRead}
        style={this.props.style}
        aspect={this.aspect}>
        {this.props.children}
      </Camera>
    )
  }
}
