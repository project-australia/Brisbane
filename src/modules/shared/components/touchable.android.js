import React from 'react'
import {TouchableNativeFeedback, View} from 'react-native'

export const Touchable = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress} {...props}>
      <View style={props.style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}
