import React from 'react'
import { Text, View } from 'react-native'
import Config from 'react-native-config'

import { styles } from './styles/Home.styles'
import { instructions } from '../constants/instructions'

export default class App extends React.Component<{}> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Ballard Book!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          {`this is a secret: ${Config.TEST}`}
        </Text>
      </View>
    )
  }
}
