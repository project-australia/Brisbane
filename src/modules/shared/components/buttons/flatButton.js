import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Touchable } from '../touchable'

import { styles } from '../styles/buttons.styles'

const getTextStyle = isSecondary =>
  isSecondary ? styles.secondaryText : styles.primaryText

export const FlatButton = ({ title, onPress, secondary, containerStyle }) => (
  <Touchable
    borderless
    style={StyleSheet.flatten([styles.flat, containerStyle])}
    onPress={onPress}
  >
    <Text style={getTextStyle(secondary)}>{title}</Text>
  </Touchable>
)
