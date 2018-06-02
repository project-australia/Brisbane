import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagBook } from './shoppingBagBook'
import { AddBookRow } from './addBookRow'
import { SolidButton } from '../../shared/components/buttons'
import { capitalizeText } from '../../../services/app/textFormatService'
import { formatEdition } from '../../account/components/myorders'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { styles } from './styles/shoppingBagItems.style'

const renderBook = removeItemFromShoppingBag => shoppingBagItem => {
  const { book, type, quantity, id } = shoppingBagItem

  return (
    <ShoppingBagBook
      key={ id }
      shoppingBagItem={ shoppingBagItem }
      image={ book.images && book.images.medium }
      title={ capitalizeText(book.title) }
      quantity={ quantity }
      subtitleOne={ book.author }
      subtitleTwo={ formatEdition(book.edition) }
      prices={ book.prices }
      removeItemFromShoppingBag={ removeItemFromShoppingBag }
      type={ type }
    />
  )
}

const setAddBookTitle = isSelling =>
  isSelling ? 'Sell more books' : 'Buy more books'

const setTotalPriceColor = isSelling =>
  isSelling ? styles.secondaryColor : styles.primaryColor

export const ShoppingBagItems = props => {
  const {
    items,
    title,
    checkoutButton,
    isSellingBooks,
    onPressMoreBooks,
    totalPrice,
    removeItemFromShoppingBag
  } = props
  if (items.length === 0) {
    return null
  }
  return (
    <View style={styles.itemsWrap}>
      <MenuTitle title={title} style={styles.titleWrap} />
      {items.map(renderBook(removeItemFromShoppingBag))}
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
          {`$${totalPrice}`}
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
  removeItemFromShoppingBag: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  onPressMoreBooks: PropTypes.func.isRequired
}

ShoppingBagItems.defaultProps = {
  items: []
}
