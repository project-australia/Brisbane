import React from 'react'
import { View } from 'react-native'
import { Touchable } from './touchable'

export const TouchableIfOnPress = props => {
  return props.onPress ? (
    <Touchable {...props}>{props.children}</Touchable>
  ) : (
    <View {...props}>{props.children}</View>
  )
}
