import React from 'react'
import { Text } from 'react-native'
import { TouchableIfOnPress } from './touchableIfOnPress'

import { styles } from './styles/row.style'

const renderSubtitle = subtitle => {
  if (typeof subtitle === 'string') {
    return <Text style={styles.contentSubtitleButton}>{subtitle}</Text>
  }
  if (typeof subtitle === 'object') return subtitle
  return null
}

const renderValue = value => {
  if (typeof value === 'string') {
    return <Text style={styles.rightValue}>{value}</Text>
  }
  if (typeof value === 'object') return value
  return null
}

export const RowValue = ({ title, subtitle, value, onPress, onPressTitle }) => (
  <TouchableIfOnPress onPress={onPress} style={styles.wrap}>
    <TouchableIfOnPress onPress={onPressTitle} style={styles.sideContentWrap}>
      <Text style={styles.contentTitle}>{title}</Text>
      {renderSubtitle(subtitle)}
    </TouchableIfOnPress>
    {renderValue(value)}
  </TouchableIfOnPress>
)
