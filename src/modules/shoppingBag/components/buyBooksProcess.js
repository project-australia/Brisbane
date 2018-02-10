import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { book } from '../../home/propTypes/book'

import { Navbar } from '../../shared/components/navbar'
import { OrderSummaryList } from './orderSummaryList'
import { MenuTitle } from '../../shared/components/menuTitle'
import { FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

export const BuyBooksProcess = props => {
  const booksLength = props.books.length
  return (
    <View>
      <Navbar
        title={`Buying ${booksLength} Books`}
        onBack={props.navigateBack}
      />
      <ScrollView>
        <OrderSummaryList orders={props.books} total={props.totalPrice} />
        <MenuTitle title={'Checkout'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Choose a method to finalize your selling
          </Text>
          <FormOutlineButton
            secondary
            title={'Pay localy'}
            onPress={() => alert('Create Order With Payment in Person')}
          />
          <View style={{ height: 15 }} />
          <FormOutlineButton
            secondary
            title={'Checkout with Paypal'}
            onPress={props.checkoutWithPayPal}
          />
        </View>
      </ScrollView>
    </View>
  )
}

BuyBooksProcess.navigationOptions = {
  title: 'Buy Books',
  header: null
}

BuyBooksProcess.propTypes = {
  checkoutWithPayPal: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(book).isRequired
}
