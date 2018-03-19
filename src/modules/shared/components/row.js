import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { styles } from './styles/row.style'
const fontWeightBold = { fontWeight: 'bold' }

const renderLeft = ({ title, style }, bold) => {
  const stylesArray = [styles.leftTitle, style]

  if (bold) {
    stylesArray.unshift(fontWeightBold)
  }

  return <Text style={StyleSheet.flatten(stylesArray)}>{title}</Text>
}

const renderRight = ({ title, style }, bold) => {
  const stylesArray = [styles.rightTitle, style]

  if (bold) {
    stylesArray.unshift(fontWeightBold)
  }

  return <Text style={StyleSheet.flatten(stylesArray)}>{title}</Text>
}

export const Row = ({ left, right, bold }) => (
  <View style={styles.wrap}>
    {renderLeft(left, bold)}
    {renderRight(right, bold)}
  </View>
)
