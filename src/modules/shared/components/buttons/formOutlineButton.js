import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../styles/buttons.styles'
import { func } from 'prop-types'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import { Colors, Metrics } from '../../../../constants'

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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonLabel
          style={{ title: textStyle, subtitle: subtitleStyle }}
          title={props.title}
          subtitle={props.subtitle}
        />
        {props.icon && <Icon
          name={'barcode-scan'}
          color={Colors.gray200}
          size={Metrics.icons.large}
          style={{marginLeft: 20}}
        />}
      </View>
    </TouchableHighlight>
  )
}

FormOutlineButton.propTypes = {
  onPress: func.isRequired
}
