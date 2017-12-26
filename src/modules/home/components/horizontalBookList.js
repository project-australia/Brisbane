import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'

import { book } from '../propTypes/book'
import { Book } from './book'

import { styles } from './styles/home.styles'

const renderBook = (onBuy, onRent) => ({ item }) => (
  <Book
    book={item}
    onBuyPressed={() => onBuy(item)}
    onRentPressed={() => onRent(item)}
  />
)

const keyExtractor = item => item.id

export const HorizontalBookList = props => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={props.books}
    renderItem={renderBook(props.onBuyBook, props.onRentBook)}
    keyExtractor={keyExtractor}
    ListHeaderComponent={<View style={styles.listHeaderSpacing} />}
    ListFooterComponent={<View style={styles.listFooterSpacing} />}
  />
)

HorizontalBookList.propTypes = {
  books: PropTypes.arrayOf(book).isRequired,
  onBuyBook: PropTypes.func.isRequired,
  onRentBook: PropTypes.func.isRequired
}
