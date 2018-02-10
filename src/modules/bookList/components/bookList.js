import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { Touchable } from '../../shared/components/touchable'
import { Navbar } from '../../shared/components/navbar'

import { styles } from '../../shoppingBag/components/styles/shoppingBagItems.style'
import { FlatButton } from '../../shared/components/buttons/index'

const renderBook = ({ id, images, title, author, edition, sellingPrice }) => {
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
            title={'Rent'}
            onPress={() => console.warn('👋 Pariu RentScreen')}
            containerStyle={styles.rightContentButton}
          />
          <FlatButton
            title={'Sell'}
            onPress={() => console.warn('👋 Pariu SellScreen')}
            containerStyle={styles.rightContentButton}
          />
        </View>
      </View>
    </Touchable>
  )
}

export const BookList = ({ navigateBack, list }) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar title={'Book list'} onBack={navigateBack} />
      <ScrollView>{list.map(renderBook)}</ScrollView>
    </View>
  )
}
