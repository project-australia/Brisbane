import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagBook } from './shoppingBagBook'
import { AddBookRow } from './addBookRow'
import { SolidButton } from '../../shared/components/buttons'

import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { styles } from './styles/shoppingBagItems.style'

const renderBook = ({ book, type, quantity, id }) => (
  <ShoppingBagBook
    key={id}
    image={book.imageUri}
    title={book.title}
    subtitleOne={book.author}
    subtitleTwo={book.edition}
    price={book.sellPrice}
    type={type}
  />
)

const setAddBookTitle = (isSelling) => (
  (isSelling) ? 'Sell more books' : 'Buy more books'
)

const setTotalPriceColor = (isSelling) => (
  (isSelling) ? styles.secondaryColor : styles.primaryColor
)

export const ShoppingBagItems = ({
  items,
  title,
  addBookTitle,
  checkoutButtonTitle,
  isSellingBooks,
  totalValue
}) => {
  return (typeof items !== 'undefined' && items.length > 0) && (
    <View style={styles.itemsWrap}>
      <MenuTitle
        title={title}
        style={styles.titleWrap}
      />
      {items.map(renderBook)}
      <AddBookRow title={setAddBookTitle(isSellingBooks)} />
      <View style={StyleSheet.flatten([styles.contentWrap, styles.whiteBackground])}>
        <Text style={styles.totalText}>Total</Text>
        <Text
          style={StyleSheet.flatten([
            styles.totalPriceText,
            setTotalPriceColor(isSellingBooks)
          ])}
        >
          {`$${totalValue}`}
        </Text>
      </View>
      <SolidButton secondary={isSellingBooks} title={checkoutButtonTitle} />
    </View>
  )
}

ShoppingBagItems.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}
