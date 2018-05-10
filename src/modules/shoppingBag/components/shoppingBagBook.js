import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './styles/shoppingBagItems.style'
import { Colors, Metrics } from '../../../constants'

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
  if (typeof item === 'string') return item
  if (typeof item === 'object') return item.join(', ')
}

export const ShoppingBagBook = props => {
  const {
    image,
    title,
    shoppingBagItem,
    subtitleOne,
    subtitleTwo,
    prices,
    removeItemFromShoppingBag,
    type
  } = props
  const cardStyle = [styles.card, { borderColor: setLeftBorderColor(type) }]
  return (
    <View style={cardStyle}>
      <View style={[styles.contentWrap, styles.noRightPadding]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
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
        <TouchableOpacity
          onPress={() => removeItemFromShoppingBag(shoppingBagItem)}
        >
          <Icon
            name={'delete'}
            color={Colors.gray200}
            size={Metrics.icons.large}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

ShoppingBagBook.propTypes = {
  type: PropTypes.oneOf(['BUY', 'RENT', 'SELL']).isRequired,
  removeItemFromShoppingBag: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shoppingBagItem: PropTypes.object.isRequired,
  subtitleOne: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  subtitleTwo: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  prices: PropTypes.object.isRequired
}
