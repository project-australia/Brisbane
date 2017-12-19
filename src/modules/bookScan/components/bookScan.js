import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Scanner } from '../../shared/components/camera'
import { styles } from './styles/bookScan.style'

export class BookScanner extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Scanner style={styles.preview}>
          <Text style={styles.capture}>
            [INSIRA AQUI CUSTOMIZACOES]
          </Text>
        </Scanner>
      </View>
    )
  }
}
