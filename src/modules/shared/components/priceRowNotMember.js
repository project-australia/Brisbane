import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { styles } from './styles/priceRow.style'

export const PriceRowNotMember = props => {
  const price = props.price.buy ? props.price.buy : props.price.rent
  const discontPrice = price - (price * 0.20)
  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>Price for Club Members</Text>
        {discontPrice > 0 && <Text style={styles.title}>{`$${discontPrice.toFixed(2)}`}</Text>}
      </View>
    </View>
  )
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
