import React from 'react'
import { ScrollView, Text } from 'react-native'

const renderBook = book => <Text key={book.id}>{book.title}</Text>

export const ShoppingBagItems = ({ books }) => (
  <ScrollView>{books.map(renderBook)}</ScrollView>
)
