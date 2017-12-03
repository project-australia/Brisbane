import React from 'react'
import {Text, StyleSheet, TouchableHighlight} from 'react-native'

import {styles} from './styles/formButton.styles'

export const FormButton = (props) => {
  const style = StyleSheet.flatten([styles.button, props.styles])
  return (
    <TouchableHighlight style={style} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableHighlight>
  )
}
