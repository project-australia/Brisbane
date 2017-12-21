import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { func, shape, string } from 'prop-types'
import { Touchable } from './touchable'

import { styles } from './styles/menuTitle.style'
import { Colors } from '../../../constants'

const renderButton = button => {
  const color = button.color ? button.color : Colors.primary500
  const buttonTextStyle = StyleSheet.flatten([styles.buttonText, { color }])
  return (
    <Touchable borderless onPress={button.onPress} style={styles.buttonWrap}>
      <Text style={buttonTextStyle}>{button.text}</Text>
    </Touchable>
  )
}

export const MenuTitle = props => {
  const wrapStyle = StyleSheet.flatten([styles.wrap, props.style])
  return (
    <View style={wrapStyle}>
      <Text style={styles.title}>{props.title}</Text>
      {typeof props.button !== 'undefined' && renderButton(props.button)}
    </View>
  )
}
MenuTitle.defaultProps = {
  button: undefined,
  title: ''
}
MenuTitle.propTypes = {
  button: shape({
    text: string,
    onPress: func
  }),
  title: string
}
