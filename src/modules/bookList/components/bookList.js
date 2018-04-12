import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text } from 'react-native'
import { book } from '../../home/propTypes/book'
import { Navbar } from '../../shared/components/navbar'
import { BookListRow } from './bookListRow'

export const BookList = ({
  navigateBack,
  list,
  onBuyPressed,
  onRentPressed,
  navigateToBook
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
            navigateToBook={navigateToBook}
          />
        ))}
        {list.length === 0 && (
          <View
            style={{
              flex: 1
            }}
          >
            <Text style={{ textAlign: 'center', paddingTop: 30 }}>
              Sorry, Books not Found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

BookList.propTypes = {
  list: PropTypes.arrayOf(book).isRequired,
  onBuyPressed: PropTypes.func.isRequired,
  onRentPressed: PropTypes.func.isRequired,
  navigateToBook: PropTypes.func.isRequired
}
