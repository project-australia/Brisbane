import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import { styles } from './styles/shoppingBagItems.style'
import { Colors } from '../../../constants'
import { capitalizeText } from '../../../services/app/textFormatService'

const renderType = (type, prices) => {
  switch (type) {
    case 'BUY':
      return 'Buying '
    case 'RENT':
      return 'Renting '
    case 'SELL':
      return prices.sell ? 'Selling ' : 'Donating '
    default:
      return ''
  }
}

const setLeftBorderColor = type =>
  type === 'BUY' || type === 'RENT' ? Colors.primary500 : Colors.secondary500

const renderBookPrice = (type, prices) => {
  const price =
    type === 'SELL'
      ? prices.sell
      : type === 'BUY' ? prices.buy : type === 'RENT' ? prices.rent : undefined

  return <Text style={styles.title}>{`$${price}`}</Text>
}

const returnListIfArray = item => {
  if (typeof item === 'string') return capitalizeText(item)
  if (typeof item === 'object') return capitalizeText(item.join(', '))
}

export const OrderBookItem = props => {
  const {
    image,
    title,
    subtitleOne,
    subtitleTwo,
    prices,
    type
  } = props
  const cardStyle = [styles.card, { borderColor: setLeftBorderColor(type) }]
  return (
    <View style={cardStyle}>
      <View style={[styles.contentWrap]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {capitalizeText(title)}
          </Text>
          {subtitleOne && (
            <Text numberOfLines={1} style={styles.subtitle}>
              {returnListIfArray(subtitleOne)}
            </Text>
          )}
          {subtitleTwo && (
            <Text numberOfLines={1} style={styles.subtitle}>
              {returnListIfArray(subtitleTwo)}
            </Text>
          )}
        </View>
        <View>
          <Text style={styles.subtitleRight}>{renderType(type, prices)}</Text>
          {renderBookPrice(type, prices)}
        </View>
      </View>
    </View>
  )
}

OrderBookItem.propTypes = {
  type: PropTypes.oneOf(['BUY', 'RENT', 'SELL']).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitleOne: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  subtitleTwo: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  prices: PropTypes.object.isRequired
}
