import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagBook } from './shoppingBagBook'

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

export const ShoppingBagItems = ({ items, title }) => (
  <View>
    <MenuTitle
      title={title}
      style={styles.titleWrap}
    />
    {items.map(renderBook)}
  </View>
)

ShoppingBagItems.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}
