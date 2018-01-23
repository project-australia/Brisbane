import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles/screenTitleAndSubtitle'

export const ScreenTitleAndSubtitle = ({ title, subtitle }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
)
