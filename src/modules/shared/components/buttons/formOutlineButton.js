import React from 'react'
import { styles } from '../styles/buttons.styles'
import { func } from 'prop-types'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import { Colors } from '../../../../constants'

export const FormOutlineButton = props => {
  const {
    transparentButton,
    primaryOutline,
    secondaryOutline,
    primaryText,
    secondaryText
  } = styles

  const underlayColor = props.secondary
    ? Colors.secondary700
    : Colors.primary700
  const outlineStyle = props.secondary ? secondaryOutline : primaryOutline
  const textStyle = props.secondary ? secondaryText : primaryText

  const style = StyleSheet.flatten([
    transparentButton,
    outlineStyle,
    props.style
  ])
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={underlayColor}
    >
      <Text style={textStyle}>{props.title}</Text>
    </TouchableHighlight>
  )
}

FormOutlineButton.propTypes = {
  onPress: func.isRequired
}
