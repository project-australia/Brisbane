import React from 'react'
import {Text, StyleSheet, TouchableHighlight} from 'react-native'

import {styles} from './styles/buttons.styles'
import {Colors} from '../../../constants'

export const FormButton = (props) => {
  const {primaryButton, darkenOutline, whiteText} = styles

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

export const FormOutlineButton = (props) => {
  const {transparentButton, primaryOutline, primaryText} = styles

  const style = StyleSheet.flatten([transparentButton, primaryOutline, props.style])
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

export const CardFooterButton = (props) => {
  const {bottomRadius, primaryButton, whiteText, secondaryButton} = styles

  const buttonColor = (props.secondary) ? secondaryButton : primaryButton
  const style = StyleSheet.flatten([bottomRadius, buttonColor, props.style])
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
