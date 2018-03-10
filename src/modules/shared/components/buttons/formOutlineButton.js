import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../styles/buttons.styles'
import { func } from 'prop-types'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import { Colors, Metrics } from '../../../../constants'

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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={textStyle}>{props.title}</Text>
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
