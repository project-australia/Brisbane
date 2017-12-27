import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

const renderBook = ({ book, type, quantity, id }) => (
  <Text key={id}>{`${book.title} - ${type} - ${quantity} `}</Text>
)

export const ShoppingBagItems = ({ items }) => (
  <ScrollView>{items.map(renderBook)}</ScrollView>
)

ShoppingBagItems.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}
