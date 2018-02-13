import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles/bookTitleAndAuthor.style'

export const BookTitleAndAuthor = ({ authors, title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {
        (authors) &&
        <Text style={styles.author}>{authors.join(', ')}</Text>
      }
    </View>
  )
}
