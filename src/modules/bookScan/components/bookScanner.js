import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Scanner } from './scanner'
import { styles } from './styles/bookScanner.style'

export class BookScanner extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Scanner style={styles.preview} />
      </View>
    )
  }
}
