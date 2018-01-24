import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { Touchable } from '../../shared/components/touchable'
import { Navbar } from '../../shared/components/navbar'

import { styles } from '../../shoppingBag/components/styles/shoppingBagItems.style'

const renderBook = ({ id, imageUri, title, author, edition, sellPrice }) => (
  <Touchable onPress={() => console.warn('Go to book: ', title)} key={id} style={styles.cardWithoutBorder}>
    <View style={styles.contentWrap}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.detailsWrap}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>{author}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>{edition}</Text>
      </View>
      <View style={styles.rightContentWrap}>
        {(sellPrice !== 0) && <Text style={styles.title}>{`$${sellPrice}`}</Text>}
      </View>
    </View>
  </Touchable>
)

export const BookList = ({ navigateBack, list }) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar
        title={'Book list'}
        onBack={navigateBack}
      />
      <ScrollView>
        {list.map(renderBook)}
      </ScrollView>
    </View>
  )
}
