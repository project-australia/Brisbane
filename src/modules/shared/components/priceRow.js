import React from 'react'
import { Text, View } from 'react-native'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

export const PriceRow = ({ title, price, button }) => {
  const titleToShow = price !== null ? title.sell : title.donate
  const priceToShow = price !== null ? price : '0.00'
  const buttonTitleToShow =
    price !== null ? button.title.sell : button.title.donate
  const functionToUse =
    price !== null ? button.onPress.sell : button.onPress.donate
  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>{titleToShow}</Text>
        <Text style={styles.title}>{`$${priceToShow}`}</Text>
      </View>
      <FlatButton secondary title={buttonTitleToShow} onPress={functionToUse} />
    </View>
  )
}
