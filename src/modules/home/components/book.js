import React from 'react'
import { book } from '../propTypes/book'
import { Text, View, Image } from 'react-native'

import { Card } from '../../shared/components/card'
import { FormButton, FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/home.styles'

export const Book = ({ book: { title, author, edition, imageUri } }) => (
  <Card style={styles.bookCard}>
    <Image style={styles.bookImage} source={{ uri: imageUri }} />
    <View style={styles.bookInfoWrap}>
      <Text style={styles.primaryText}>{title}</Text>
      <Text style={styles.secondaryInput}>{author}</Text>
      <Text style={styles.secondaryInput}>{edition}</Text>
      <View style={styles.bookButtonsGroup}>
        <FormButton style={styles.buyButton} title={'Buy'} />
        <FormOutlineButton style={styles.rentButton} title={'Rent'} />
      </View>
    </View>
  </Card>
)

Book.propTypes = { book: book.isRequired }
