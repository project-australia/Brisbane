import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

const isSelling = type => type === 'SELL'

export const PriceRow = ({ title, price, button, screenType, book }) => {
  let titleToShow
  let priceToShow
  let callbackFunction
  let buttonTitleToShow

  if (isSelling(screenType)) {
    titleToShow = price ? title.sell : title.donate
    priceToShow = price ? price.sell : 0
    buttonTitleToShow = price ? button.title.sell : button.title.donate
    callbackFunction = price ? button.onPress.sell : button.onPress.donate
  } else {
    titleToShow = title.buy
    priceToShow = price
    buttonTitleToShow = button.title.buy
    callbackFunction = button.onPress.buy
  }

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.rowInfo}>
          <Text style={styles.description}>{titleToShow}</Text>
          <Text style={styles.title}>{`$${priceToShow}`}</Text>
        </View>
        <FlatButton
          secondary
          title={buttonTitleToShow}
          onPress={() => callbackFunction(book)}
        />
      </View>
      {
        (!isSelling(screenType) && price && price.rent) &&
        <View style={styles.row}>
          <View style={styles.rowInfo}>
            <Text style={styles.description}>{title.rent}</Text>
            <Text style={styles.title}>{`$${price.rent}`}</Text>
          </View>
          <FlatButton
            secondary
            title={button.title.rent}
            onPress={button.onPress.rent}
          />
        </View>
      }
    </View>
  )
}

PriceRow.propsType = {
  screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
  book: book,
  price: PropTypes.shape({
    buy: PropTypes.number,
    sell: PropTypes.number,
    donate: PropTypes.number
  }).isRequired,
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
