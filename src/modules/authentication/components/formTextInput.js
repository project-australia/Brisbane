import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

import {styles} from './styles/formTextInput.style'

export const FormTextInput = (props) => {
  const style = StyleSheet.flatten([styles.textInput, props.style])
  return (
    <TextInput {...props} style={style} />
  )
}
