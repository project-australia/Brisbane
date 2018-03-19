import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Colors } from '../../../constants'

import { styles } from './styles/formTextInput.style'
import { styles as loginStyles } from './styles/loginFormStyles'

export const FormTextInput = props => {
  const isValidInput = props.validationCondition(props.value)
  const styleArray = [loginStyles.itemSpacing, styles.textInput, props.style]

  if (!isValidInput) {
    styleArray.push(styles.invalidInput)
  }

  return (
    <TextInput
      {...props}
      style={StyleSheet.flatten(styleArray)}
      selectionColor={Colors.secondary500}
      autoCapitalize="words"
      underlineColorAndroid={'transparent'}
    />
  )
}

FormTextInput.defaultProps = {
  validationCondition: () => true
}
