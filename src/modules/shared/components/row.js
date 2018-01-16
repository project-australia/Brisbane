import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { styles } from './styles/row.style'

const renderLeft = ({ title, style }) => {
  const titleStyle = StyleSheet.flatten([styles.leftTitle, style])
  return (
    <Text style={titleStyle}>{title}</Text>
  )
}

const renderRight = ({ title, style }) => {
  const titleStyle = StyleSheet.flatten([styles.rightTitle, style])
  return (
    <Text style={titleStyle}>{title}</Text>
  )
}

export const Row = ({ left, right }) => (
  <View style={styles.wrap}>
    {renderLeft(left)}
    {renderRight(right)}
  </View>
)
