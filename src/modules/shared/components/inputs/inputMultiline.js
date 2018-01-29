import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { styles } from '../styles/input.styles'

export const InputMultiline = props => {
  const style = StyleSheet.flatten([styles.multilineInput, props.style])
  return (
    <TextInput
      multiline
      {...props}
      style={style}
      underlineColorAndroid={'transparent'}
    />
  )
}
