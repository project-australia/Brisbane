import React from 'react'
import { styles } from '../styles/buttons.styles'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import { Colors } from '../../../../constants'
import { func } from 'prop-types'

export const FormButton = props => {
  const { primaryButton, darkenOutline, whiteText } = styles

  const style = StyleSheet.flatten([primaryButton, darkenOutline, props.style])
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={Colors.primary700}
    >
      <Text style={whiteText}>{props.title}</Text>
    </TouchableHighlight>
  )
}

FormButton.propTypes = {
  onPress: func.isRequired
}
