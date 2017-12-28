import React from 'react'
import { StyleSheet, View } from 'react-native'

import { styles } from './styles/card.style'

export const GeneralInfoCard = props => {
  const cardStyle = StyleSheet.flatten([styles.bleedingCard, props.style])
  return <View style={cardStyle}>{props.children}</View>
}
