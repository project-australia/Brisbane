import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

const isSelling = type => type === 'SELL'

export const PriceRow = ({ title, price, button, screenType, book }) => {
  let titleToShow
  let callbackFunction
  let buttonTitleToShow

  if (isSelling(screenType)) {
    titleToShow = price ? title.sell : title.donate
    buttonTitleToShow = price ? button.title.sell : button.title.donate
    callbackFunction = price ? button.onPress.sell : button.onPress.donate
  } else {
    titleToShow = title.buy
    buttonTitleToShow = button.title.buy
    callbackFunction = button.onPress.buy
  }

  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>{titleToShow}</Text>
        <Text style={styles.title}>{`$${price}`}</Text>
      </View>
      <FlatButton
        secondary
        title={buttonTitleToShow}
        onPress={() => callbackFunction(book)}
      />
    </View>
  )
}

PriceRow.propsType = {
  screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
  book: book,
  price: PropTypes.number,
  button: PropTypes.object,
  title: PropTypes.shape({
    buy: PropTypes.string,
    sell: PropTypes.string,
    donate: PropTypes.string
  }).isRequired,
  onPress: PropTypes.shape({
    buy: PropTypes.func,
    sell: PropTypes.func,
    donate: PropTypes.func
  }).isRequired
}

PriceRow.defaultProps = {
  price: Number(0).toFixed(2)
}
