import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { Touchable } from '../../shared/components/touchable'

import { styles } from '../../shoppingBag/components/styles/shoppingBagItems.style'
import { FlatButton } from '../../shared/components/buttons/index'

export const BookListRow = props => {
  const { id, images, title, author, edition, price } = props.book
  const imageSource = images
    ? { uri: images.small }
    : require('../../../assets/images/book-placeholder.png')

  return (
    <Touchable
      onPress={() => console.warn('Go to book: ', title)}
      key={id}
      style={styles.cardWithoutBorder}
    >
      <View style={styles.contentWrap}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {author}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {edition}
          </Text>
        </View>
        <View style={styles.rightContentWrap}>
          <FlatButton
            showPrice
            title={'Buy'}
            onPress={() => props.onBuyPressed(props.book)}
            containerStyle={styles.rightContentButton}
            price={price.buy}
          />
          <FlatButton
            showPrice
            title={'Rent'}
            onPress={() => props.onRentPressed(props.book)}
            containerStyle={styles.rightContentButton}
            price={price.rent}
          />
        </View>
      </View>
    </Touchable>
  )
}

BookListRow.propTypes = {
  book: book.isRequired,
  onBuyPressed: PropTypes.func.isRequired,
  onRentPressed: PropTypes.func.isRequired
}
