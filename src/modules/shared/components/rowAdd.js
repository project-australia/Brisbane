import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from './touchable'

import { Colors, Metrics } from '../../../constants'
import { styles } from './styles/rowAdd.style'

export const RowAdd = ({ title, onPress }) => (
  <Touchable style={styles.wrap} onPress={onPress}>
    <Icon
      color={Colors.gray500}
      name={'plus'}
      size={Metrics.icons.medium}
      style={styles.icon}
    />
    <Text style={styles.title}>{title}</Text>
  </Touchable>
)
