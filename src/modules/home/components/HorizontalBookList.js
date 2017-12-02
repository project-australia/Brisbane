import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import { book } from '../propTypes/book'
import { Book } from './book'

export class HorizontalBookList extends React.Component<{}> {
  static propTypes = {
    books: PropTypes.arrayOf(book).isRequired
  }

  renderBook = ({item}) => <Book book={item}/>
  keyExtractor = (item) => item.id

  render () {
    return (
      <FlatList
        data={this.props.books}
        renderItem={this.renderBook}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}
