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
  book: {
    title,
    authors,
    edition,
    images,
    price: { buy, rent }
  }
}) => {
  const imageSource = images
    ? { uri: images.medium }
    : require('../../../assets/images/book-placeholder.png')
  const groupAuthors = authors.join(', ')
  const buyBookLabel = `$${buy}`
  const rentBookLabel = `$${rent}`
  return (
    <Card style={styles.bookCard}>
      <View style={styles.bookWrap}>
        <Image style={styles.bookImage} source={imageSource} />
        <View style={styles.bookInfoWrap}>
          <Text style={styles.primaryText}>{title}</Text>
          <Text style={styles.secondaryInput}>{groupAuthors}</Text>
          <Text style={styles.secondaryInput}>{edition || 'First'}</Text>
          <View style={styles.bookButtonsGroup}>
            <View style={styles.buyButtonWrapMargin}>
              <FormButton
                style={styles.buyButton}
                title={'Buy'}
                subtitle={buyBookLabel}
                onPress={onBuyPressed}
              />
            </View>
            <View style={styles.buyButtonWrap}>
              <FormOutlineButton
                style={styles.rentButton}
                title={'Rent'}
                subtitle={rentBookLabel}
                onPress={onRentPressed}
              />
            </View>
          </View>
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
