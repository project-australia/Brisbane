import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

const isSelling = type => type === 'SELL'
const isBuying = type => type === 'BUY'

export const PriceRow = (props) => {
  const { title, price, button, screenType, book } = props
  let titleToShow
  let priceToShow
  let callbackFunction
  let buttonTitleToShow
  let rent

  if (isSelling(screenType)) {
    callbackFunction = button.onPress.sell
    priceToShow = price.sell

    if (priceToShow) {
      titleToShow = 'Sell this book for'
      buttonTitleToShow = 'SELL'
    } else {
      titleToShow = 'Donate this book'
      buttonTitleToShow = 'Donate'
    }
  } else if (isBuying(screenType)) {
    titleToShow = title.buy
    priceToShow = price.buy
    buttonTitleToShow = button.title.buy
    callbackFunction = button.onPress.buy
  }

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.rowInfo}>
          <Text style={styles.description}>{titleToShow}</Text>
          {priceToShow > 0 && <Text style={styles.title}>{`$${priceToShow}`}</Text>}
        </View>
        <FlatButton
          secondary
          title={buttonTitleToShow}
          onPress={() => callbackFunction(book)}
        />
      </View>
      { rent && (
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
      )}
    </View>
  )
}

PriceRow.propsType = {
  screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
  book: book,
  price: PropTypes.shape({
    buy: PropTypes.number,
    sell: PropTypes.number
  }).isRequired,
  button: PropTypes.object,
  title: PropTypes.shape({
    buy: PropTypes.string,
    sell: PropTypes.string
  }).isRequired,
  onPress: PropTypes.shape({
    buy: PropTypes.func,
    sell: PropTypes.func
  }).isRequired
}

PriceRow.defaultProps = {
  price: Number(0).toFixed(2)
}
