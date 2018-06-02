import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles/bookTitleAndAuthor.style'
import { capitalizeText } from '../../../services/app/textFormatService'

export const BookTitleAndAuthor = ({ authors, title }) => {
  return (
    <View>
      <Text style={styles.title}>{capitalizeText(title)}</Text>
      {authors && <Text style={styles.author}>{capitalizeText(authors.join(', '))}</Text>}
    </View>
  )
}
