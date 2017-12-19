import React from 'react'
import { View } from 'react-native'

import { styles } from './styles/card.style'

export const Card = (props) => {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}
