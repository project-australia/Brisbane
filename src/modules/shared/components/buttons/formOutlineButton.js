import React from 'react'
import { styles } from '../styles/buttons.styles'
import { func } from 'prop-types'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import { Colors } from '../../../../constants'

export const FormOutlineButton = props => {
  const { transparentButton, primaryOutline, primaryText } = styles

  const style = StyleSheet.flatten([
    transparentButton,
    primaryOutline,
    props.style
  ])
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={Colors.primary700}
    >
      <Text style={primaryText}>{props.title}</Text>
    </TouchableHighlight>
  )
}

FormOutlineButton.propTypes = {
  onPress: func.isRequired
}
