import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { styles } from '../../shoppingBag/components/styles/shoppingBagItems.style'
import { FlatButton } from '../../shared/components/buttons/index'
import { capitalizeText } from '../../../services/app/textFormatService'

export const BookListRow = props => {
  const { id, images, title, author, edition, prices } = props.book
  const imageSource = images
    ? { uri: images.small }
    : require('../../../assets/images/book-placeholder.png')

  return (
    <View key={id} style={styles.cardWithoutBorder}>
      <View style={styles.contentWrap}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {capitalizeText(title)}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {capitalizeText(author)}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {edition}
          </Text>
        </View>
        <View style={styles.rightContentWrap}>
          <FlatButton
            showPrice
            title={'Buy'}
            onPress={() => props.navigateToBook(props.book, 'BUY')}
            containerStyle={styles.rightContentButton}
            price={prices.buy}
          />
          <FlatButton
            showPrice
            title={'Rent'}
            onPress={() => props.navigateToBook(props.book, 'RENT')}
            containerStyle={styles.rightContentButton}
            price={prices.rent}
          />
        </View>
      </View>
    </View>
  )
}

BookListRow.propTypes = {
  book: book.isRequired,
  onBuyPressed: PropTypes.func.isRequired,
  onRentPressed: PropTypes.func.isRequired
}
