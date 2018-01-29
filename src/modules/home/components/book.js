import React from 'react'
import PropTypes from 'prop-types'
import { book } from '../propTypes/book'
import { Text, View, Image } from 'react-native'

import { Card } from '../../shared/components/card'
import { FormButton, FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/home.styles'

export const Book = ({
  onBuyPressed,
  onRentPressed,
  book: { title, author, edition, images }
}) => {
  const imageSource = images
    ? { uri: images.small }
    : require('../../../assets/images/book-placeholder.png')

  return (
    <Card style={styles.bookCard}>
      <Image style={styles.bookImage} source={imageSource} />
      <View style={styles.bookInfoWrap}>
        <Text style={styles.primaryText}>{title}</Text>
        <Text style={styles.secondaryInput}>{author}</Text>
        <Text style={styles.secondaryInput}>{edition}</Text>
        <View style={styles.bookButtonsGroup}>
          <FormButton
            style={styles.buyButton}
            title={'Buy'}
            onPress={onBuyPressed}
          />
          <FormOutlineButton
            style={styles.rentButton}
            title={'Rent'}
            onPress={onRentPressed}
          />
        </View>
      </View>
    </Card>
  )
}

Book.propTypes = {
  book: book.isRequired,
  onBuyPressed: PropTypes.func.isRequired,
  onRentPressed: PropTypes.func.isRequired
}
