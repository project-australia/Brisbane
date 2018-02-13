import React from 'react'
import { Text } from 'react-native'
import { TouchableIfOnPress } from './touchableIfOnPress'

import { styles } from './styles/row.style'

export const RowValue = ({ title, subtitle, value, onPress, onPressTitle }) => (
  <TouchableIfOnPress onPress={onPress} style={styles.wrap}>
    <TouchableIfOnPress onPress={onPressTitle} style={styles.sideContentWrap}>
      <Text style={styles.contentTitle}>{title}</Text>
      {(subtitle) && <Text style={styles.contentSubtitleButton}>{subtitle}</Text>}
    </TouchableIfOnPress>
    <Text style={styles.rightValue}>{value}</Text>
  </TouchableIfOnPress>
)
