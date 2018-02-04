import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import { styles } from './styles/shoppingBagItems.style'
import { Colors } from '../../../constants'

const renderType = type => {
  switch (type) {
    case 'BUY':
      return 'Buying '
    case 'RENT':
      return 'Renting '
    case 'SELL':
      return 'Selling '
    case 'DONATE':
      return 'Donating '
    default:
      return ''
  }
}

const setLeftBorderColor = type =>
  type === 'BUY' || type === 'RENT' ? Colors.primary500 : Colors.secondary500

export const ShoppingBagBook = ({
  image,
  title,
  subtitleOne,
  subtitleTwo,
  price,
  quantity,
  type
}) => {
  const cardStyle = [styles.card, { borderColor: setLeftBorderColor(type) }]
  return (
    <View style={cardStyle}>
      <View style={styles.contentWrap}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitleOne}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitleTwo}
          </Text>
        </View>
        <View style={styles.rightContentWrap}>
          <Text style={styles.subtitle}>{renderType(type)}</Text>
          {quantity > 1 && <Text style={styles.title}>{`${quantity} x `}</Text>}
          {price && <Text style={styles.title}>{`$${price}`}</Text>}
        </View>
      </View>
    </View>
  )
}

ShoppingBagBook.propTypes = {
  type: PropTypes.oneOf(['BUY', 'RENT', 'SELL']).isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitleOne: PropTypes.string,
  subtitleTwo: PropTypes.string,
  price: PropTypes.number.isRequired
}
