import React from 'react'
import { book } from '../propTypes/book'
import { Text } from 'react-native'

export class Book extends React.Component<{}> {
  static propTypes = {book: book.isRequired}

  render () {
    return (
      <Text>
        {this.props.book.author}
      </Text>
    )
  }
}
