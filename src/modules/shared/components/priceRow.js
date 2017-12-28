import React from 'react'
import { Text, View } from 'react-native'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

export const PriceRow = ({
  title,
  price,
  button
}) => (
  <View style={styles.row}>
    <View style={styles.rowInfo}>
      <Text style={styles.description}>{title}</Text>
      <Text style={styles.title}>{`$${price}`}</Text>
    </View>
    <FlatButton
      secondary
      title={button.title}
      onPress={button.onPress}
    />
  </View>
)
