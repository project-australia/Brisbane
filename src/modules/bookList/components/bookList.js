import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { book } from '../../home/propTypes/book'
import { Navbar } from '../../shared/components/navbar'
import { BookListRow } from './bookListRow'

export const BookList = ({
  navigateBack,
  list,
  onBuyPressed,
  onRentPressed
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar title={'Book list'} onBack={navigateBack} />
      <ScrollView>
        {list.map(book => (
          <BookListRow
            key={book.id}
            book={book}
            onRentPressed={onRentPressed}
            onBuyPressed={onBuyPressed}
          />
        ))}
      </ScrollView>
    </View>
  )
}

BookList.propTypes = {
  list: PropTypes.arrayOf(book).isRequired,
  onBuyPressed: PropTypes.func.isRequired,
  onRentPressed: PropTypes.func.isRequired
}
