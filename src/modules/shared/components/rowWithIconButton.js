import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from './touchable'

import { Colors, Metrics } from '../../../constants'
import { styles } from './styles/rowAdd.style'

export const RowWithIconButton = ({ title, iconName, onPress }) => (
  <Touchable style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
    <Icon
      color={Colors.gray500}
      name={iconName}
      size={Metrics.icons.medium}
      style={styles.icon}
    />
  </Touchable>
)
