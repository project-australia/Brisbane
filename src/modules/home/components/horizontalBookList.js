import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'

import { book } from '../propTypes/book'
import { Book } from './book'

import { styles } from './styles/home.styles'

const renderBook = ({ item }) => <Book book={item} />
const keyExtractor = item => item.id

export const HorizontalBookList = props => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={props.books}
    renderItem={renderBook}
    keyExtractor={keyExtractor}
    ListHeaderComponent={<View style={styles.listHeaderSpacing} />}
    ListFooterComponent={<View style={styles.listFooterSpacing} />}
  />
)

HorizontalBookList.propTypes = {
  books: PropTypes.arrayOf(book).isRequired
}
