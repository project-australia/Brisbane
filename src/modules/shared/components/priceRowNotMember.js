import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { styles } from './styles/priceRow.style'
import { Metrics } from '../../../constants'
import { SimpleButton } from './buttons'

export const PriceRowNotMember = props => {
  const price = props.prices ? props.prices.sell : 0
  const discontPrice = price + price * 0.2
  return price > 0 ? (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>Elite Members Get 20% Extra</Text>
        {discontPrice > 0 && (
          <Text style={styles.title}>{`$${discontPrice.toFixed(2)}`}</Text>
        )}
      </View>
      <SimpleButton
        title={'Learn more'}
        onPress={props.onPressBallardsClub}
        style={{
          marginRight: Metrics.section,
          marginVertical: Metrics.baseMargin,
          padding: 7
        }}
      />
    </View>
  ) : null
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
