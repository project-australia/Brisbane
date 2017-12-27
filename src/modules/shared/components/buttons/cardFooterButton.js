import React from 'react'
import { styles } from '../styles/buttons.styles'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import { Colors } from '../../../../constants'
import { func } from 'prop-types'

export const CardFooterButton = props => {
  const { bottomRadius, primaryButton, whiteText, secondaryButton } = styles

  const buttonColor = props.secondary ? secondaryButton : primaryButton
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

CardFooterButton.propTypes = {
  onPress: func.isRequired
}
