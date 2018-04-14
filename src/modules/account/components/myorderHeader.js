import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles/networkMembers.style'

const property = ({ title, property }) => (
  <Text key={title} style={styles.propertyTitle}>
    {title}: <Text style={styles.propertyText}>{property}</Text>
  </Text>
)

export const MyOrderHeader = ({ title, properties }) => (
  <View style={[styles.wrap, styles.standardCardPadding]}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.textBlockWrap}>{properties.map(property)}</View>
  </View>
)
