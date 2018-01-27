import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Colors } from '../../../constants'

import { styles } from './styles/formTextInput.style'
import { styles as loginStyles } from './styles/loginFormStyles'


export const FormTextInput = props => {
  const style = StyleSheet.flatten([styles.textInput, props.style])
  return (
    <TextInput
      {...props}
      style={[loginStyles.itemSpacing, style]}
      selectionColor={Colors.secondary500}
      autoCapitalize="words"
      underlineColorAndroid={'transparent'}
    />
  )
}
