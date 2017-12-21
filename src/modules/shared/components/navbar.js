import React from 'react'
import { Platform, Text, TouchableNativeFeedback, View } from 'react-native'

import { arrayOf, func, shape, string } from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from './touchable'
import { styles } from './styles/navbar.style'
import { Colors, Metrics } from '../../../constants'

const defaultProps = {
  rightIcons: undefined,
  title: ''
}
const propTypes = {
  rightIcons: arrayOf(
    shape({
      name: string,
      onPress: func
    })
  ),
  title: string
}

const buildIcon = icon => {
  const background =
    Platform.OS === 'android'
      ? TouchableNativeFeedback.SelectableBackgroundBorderless()
      : null
  return (
    <Touchable
      background={background}
      key={icon.name}
      onPress={icon.onPress}
      style={styles.buttonTouch}
    >
      <Icon
        color={Colors.gray500}
        name={icon.name}
        size={Metrics.icons.medium}
      />
    </Touchable>
  )
}

const IconGroup = ({ icons }) => {
  if (typeof icons !== 'undefined') {
    const iconGroup = icons.map(icon => {
      return buildIcon(icon)
    })
    return <View style={styles.buttonGroupWrap}>{iconGroup}</View>
  }
  return null
}

export const NavbarMain = props => {
  return (
    <View style={styles.wrap}>
      <Text numberOfLines={1} style={styles.titleMain}>
        {props.title}
      </Text>
      <IconGroup icons={props.rightIcons} />
    </View>
  )
}
NavbarMain.defaultProps = defaultProps
NavbarMain.propTypes = propTypes
