import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles/bookTitleAndAuthor.style'

export const BookTitleAndAuthor = ({ author, title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
  </View>
)
