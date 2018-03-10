import React from 'react'
import { styles } from '../styles/buttons.styles'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import { Colors } from '../../../../constants'
import { func } from 'prop-types'

const ButtonLabel = ({title, subtitle}) => {
  const { whiteText, whiteSubtitle } = styles
  if (subtitle) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={whiteText}>{title}</Text>
        <Text style={whiteSubtitle}>{subtitle}</Text>
      </View>
    )
  }
  return (
    <Text style={whiteText}>{title}</Text>
  )
}

export const FormButton = props => {
  const { primaryButton, darkenOutline } = styles

  const style = StyleSheet.flatten([primaryButton, darkenOutline, props.style])
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={Colors.primary700}
    >
      <View>
        <ButtonLabel
          title={props.title}
          subtitle={props.subtitle}
        />
      </View>
    </TouchableHighlight>
  )
}

FormButton.propTypes = {
  onPress: func.isRequired
}
