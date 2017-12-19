import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Scanner } from '../../shared/components/camera'
import { styles } from './styles/bookScan.style'

export class BookScanner extends Component {
  takePicture = () => {
    const options = {}
    alert('tirou foto')
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }

  render () {
    return (
      <View style={styles.container}>
        <Scanner style={styles.preview}>
          <Text style={styles.capture} onPress={this.takePicture}>
            [Scan]
          </Text>
        </Scanner>
      </View>
    )
  }
}
