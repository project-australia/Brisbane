import React from 'react'
import { Text } from 'react-native'

import { Touchable } from '../touchable'

import { styles } from '../styles/buttons.styles'

const getTextStyle = isSecondary => (
  isSecondary ? styles.secondaryText : styles.primaryText
)

export const FlatButton = ({ title, onPress, secondary }) => (
  <Touchable borderless style={styles.flat} onPress={onPress}>
    <Text style={getTextStyle(secondary)}>{title}</Text>
  </Touchable>
)
