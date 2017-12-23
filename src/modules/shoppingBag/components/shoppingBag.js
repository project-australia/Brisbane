import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { BookSearch } from '../../home/components/searchBook'
import { ShoppingBagItems } from './shoppingBagItems'
import { book } from '../../home/propTypes/book'

export const ShoppingBag = props => (
  <View>
    {/* Provavelmente precisaremos criar uma search bar para a shopping bag */}
    <BookSearch onSubmit={props.searchBook} onScanPress={props.onScanPress} />
    <ShoppingBagItems books={props.books} />
  </View>
)

ShoppingBag.propTypes = {
  searchBook: PropTypes.func.isRequired,
  onScanPress: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(book).isRequired
}
