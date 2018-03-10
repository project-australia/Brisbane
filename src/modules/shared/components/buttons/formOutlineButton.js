import React from 'react'
import { styles } from '../styles/buttons.styles'
import { func } from 'prop-types'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import { Colors } from '../../../../constants'

const ButtonLabel = ({title, subtitle, style}) => {
  if (subtitle) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subtitle}>{subtitle}</Text>
      </View>
    )
  }
  return (
    <Text style={style.title}>{title}</Text>
  )
}

export const FormOutlineButton = props => {
  const {
    transparentButton,
    primaryOutline,
    secondaryOutline,
    primaryText,
    primarySubtitle,
    secondaryText,
    secondarySubtitle
  } = styles

  const underlayColor = props.secondary
    ? Colors.secondary700
    : Colors.primary700
  const outlineStyle = props.secondary ? secondaryOutline : primaryOutline
  const textStyle = props.secondary ? secondaryText : primaryText
  const subtitleStyle = props.secondary ? secondarySubtitle : primarySubtitle

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
      <View>
        <ButtonLabel
          style={{ title: textStyle, subtitle: subtitleStyle }}
          title={props.title}
          subtitle={props.subtitle}
        />
      </View>
    </TouchableHighlight>
  )
}

FormOutlineButton.propTypes = {
  onPress: func.isRequired
}
