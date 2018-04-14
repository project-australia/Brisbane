import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { FlatButton } from './buttons'

import { styles } from './styles/priceRow.style'

const isSelling = type => type === 'SELL'
const isBuying = type => type === 'BUY'
const isRenting = type => type === 'RENT'

const mapPropsBasedOnScreenType = props => {
  const { price, screenType, onRent, onBuy, onSell } = props
  let titleToShow
  let priceToShow
  let callbackFunction
  let buttonTitleToShow

  if (isSelling(screenType)) {
    callbackFunction = onSell
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
    callbackFunction = onBuy
  } else if (isRenting(screenType)) {
    titleToShow = 'Rent this book for'
    buttonTitleToShow = 'Rent'
    priceToShow = price.rent
    callbackFunction = onRent
  }

  return {
    title: titleToShow,
    price: priceToShow,
    callback: callbackFunction,
    buttonTitle: buttonTitleToShow
  }
}

export const PriceRow = props => {
  const { title, price, callback, buttonTitle } = mapPropsBasedOnScreenType(
    props
  )

  if (props.isUndesiredBook) {
    return (
      <View style={styles.row}>
        <View style={styles.rowInfo}>
          <Text style={styles.description}>
            We're not taking this book at this moment
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>{title}</Text>
        {price > 0 && <Text style={styles.title}>{`$${price}`}</Text>}
      </View>
      <FlatButton secondary title={buttonTitle} onPress={callback} />
    </View>
  )
}

PriceRow.propsType = {
  screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
  isUndesiredBook: PropTypes.bool.isRequired,
  price: PropTypes.shape({
    buy: PropTypes.number,
    rent: PropTypes.number,
    sell: PropTypes.number
  }).isRequired,
  onRent: PropTypes.func,
  onBuy: PropTypes.func,
  onSell: PropTypes.func
}

PriceRow.defaultProps = {
  price: Number(0).toFixed(2)
}
