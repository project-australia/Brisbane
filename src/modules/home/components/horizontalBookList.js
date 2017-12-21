import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'

import { book } from '../propTypes/book'
import { Book } from './book'

import { styles } from './styles/home.styles'

export class HorizontalBookList extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(book).isRequired
  }

  renderBook = ({ item }) => <Book book={item} />
  keyExtractor = item => item.id

  render () {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.props.books}
        renderItem={this.renderBook}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={<View style={styles.listHeaderSpacing} />}
        ListFooterComponent={<View style={styles.listFooterSpacing} />}
      />
    )
  }
}
