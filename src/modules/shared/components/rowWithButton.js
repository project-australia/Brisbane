import React from 'react'
import { Text, View } from 'react-native'

import { FlatButton } from './buttons'

import { styles } from './styles/rowWithButton.style'

export const RowWithButton = ({ title, buttonTitle, onPress }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
    <FlatButton secondary title={buttonTitle} onPress={onPress} />
  </View>
)
