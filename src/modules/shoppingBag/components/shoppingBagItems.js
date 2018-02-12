import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagBook } from './shoppingBagBook'
import { AddBookRow } from './addBookRow'
import { SolidButton } from '../../shared/components/buttons'

import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { styles } from './styles/shoppingBagItems.style'

const renderBook = ({ book, type, quantity, id }) => (
  <ShoppingBagBook
    key={id}
    image={book.images && book.images.medium}
    title={book.title}
    quantity={quantity}
    subtitleOne={book.author}
    subtitleTwo={book.edition}
    price={book.sellPrice || book.buyingPrice}
    type={type}
  />
)

const setAddBookTitle = isSelling =>
  isSelling ? 'Sell more books' : 'Buy more books'

const setTotalPriceColor = isSelling =>
  isSelling ? styles.secondaryColor : styles.primaryColor

export const ShoppingBagItems = ({
  items,
  title,
  addBookTitle,
  checkoutButton,
  isSellingBooks,
  onPress,
  onPressMoreBooks
}) => {
  if (items.length === 0) {
    return null
  }
  return (
    <View style={styles.itemsWrap}>
      <MenuTitle title={title} style={styles.titleWrap} />
      {items.map(renderBook)}
      <AddBookRow
        title={setAddBookTitle(isSellingBooks)}
        onPress={onPressMoreBooks}
      />
      <View
        style={StyleSheet.flatten([styles.contentWrap, styles.whiteBackground])}
      >
        <Text style={styles.totalText}>Total</Text>
        <Text
          style={StyleSheet.flatten([
            styles.totalPriceText,
            setTotalPriceColor(isSellingBooks)
          ])}
        >
          {`$${items.total('BUY')}`}
        </Text>
      </View>
      <SolidButton
        onPress={checkoutButton.onPress}
        secondary={isSellingBooks}
        title={checkoutButton.title}
      />
    </View>
  )
}

ShoppingBagItems.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
  onPress: PropTypes.func,
  onPressMoreBooks: PropTypes.func.isRequired
}

ShoppingBagItems.defaultProps = {
  items: []
}
