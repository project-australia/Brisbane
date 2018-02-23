import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

const isSelling = type => type === 'SELL'
const isBuying = type => type === 'BUY'
const isRenting = type => type === 'RENT'

const mapPropsBasedOnScreenType = props => {
  const { price, button, screenType } = props
  let titleToShow
  let priceToShow
  let callbackFunction
  let buttonTitleToShow

  if (isSelling(screenType)) {
    callbackFunction = button.onPress.sell
    priceToShow = price.sell

    if (priceToShow) {
      titleToShow = 'Sell this book for'
      buttonTitleToShow = 'Sell'
    } else {
      titleToShow = 'Donate this book'
      buttonTitleToShow = 'Donate'
    }
  } else if (isBuying(screenType)) {
    titleToShow = 'Buy this book for'
    buttonTitleToShow = 'Buy'
    priceToShow = price.buy
    callbackFunction = button.onPress.buy
  } else if (isRenting(screenType)) {
    titleToShow = 'Rent this book for'
    buttonTitleToShow = 'Rent'
    priceToShow = price.rent
    callbackFunction = button.onPress.rent
  }

  return {
    title: titleToShow,
    price: priceToShow,
    callback: callbackFunction,
    buttonTitle: buttonTitleToShow
  }
}

export const PriceRow = props => {
  const {
    title,
    price,
    callback,
    buttonTitle
  } = mapPropsBasedOnScreenType(props)

  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>{title}</Text>
        {price > 0 && <Text style={styles.title}>{`$${price}`}</Text>}
      </View>
      <FlatButton
        secondary
        title={buttonTitle}
        onPress={() => callback(props.book)}
      />
    </View>
  )
}

PriceRow.propsType = {
  screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
  book: book,
  price: PropTypes.shape({
    buy: PropTypes.number,
    rent: PropTypes.number,
    sell: PropTypes.number
  }).isRequired,
  button: PropTypes.object,
  onPress: PropTypes.shape({
    buy: PropTypes.func,
    sell: PropTypes.func
  }).isRequired
}

PriceRow.defaultProps = {
  price: Number(0).toFixed(2)
}
