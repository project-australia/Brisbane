import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { styles } from './styles/priceRow.style'

export const PriceRowNotMember = props => {
  const price = props.price.sell
  const discontPrice = price + (price * 0.20)
  return price > 0
    ? (
      <View style={styles.row}>
        <View style={styles.rowInfo}>
          <Text style={styles.description}>Club members sell for 20% more</Text>
          {discontPrice > 0 && <Text style={styles.title}>{`$${discontPrice.toFixed(2)}`}</Text>}
        </View>
      </View>
    )
    : null
}

PriceRowNotMember.propsType = {
  price: PropTypes.shape({
    buy: PropTypes.number,
    rent: PropTypes.number,
    sell: PropTypes.number
  }).isRequired
}

PriceRowNotMember.defaultProps = {
  price: Number(0).toFixed(2)
}
