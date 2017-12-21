import React from 'react'
import { StyleSheet, View } from 'react-native'

import { styles } from './styles/card.style'

export const Card = props => {
  const cardStyle = StyleSheet.flatten([styles.card, props.style])
  return <View style={cardStyle}>{props.children}</View>
}
