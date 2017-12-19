import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Camera from 'react-native-camera'

import { styles } from './styles/bookScan.style'

export class BookScanner extends Component {
  onBarCodeRead = (e) => {
    alert(`Barcode Found! Type: ${e.type} \nData: ${e.dat}`)
  }

  takePicture = () => {
    const options = {}
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam }}
          onBarCodeRead={this.onBarCodeRead}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture}>
            [CAPTURE]
          </Text>
        </Camera>
      </View>
    )
  }
}
