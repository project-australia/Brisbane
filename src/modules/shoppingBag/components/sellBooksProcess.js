import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

import { Navbar } from '../../shared/components/navbar'
import { OrderSummaryList } from './orderSummaryList'
import { MenuTitle } from '../../shared/components/menuTitle'
import { FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

export const SellBooksProcess = props => {
  const booksLength = props.books.length || 0
  return (
    <View>
      <Navbar
        title={`Selling ${booksLength} Books`}
        onBack={props.navigateBack}
      />
      <ScrollView>
        <OrderSummaryList
          orders={props.books}
          total={props.totalPrice}
          selling
        />
        <MenuTitle title={'Checkout'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Choose a method to finalize your selling
          </Text>
          <FormOutlineButton
            secondary
            title={'Delivery in Person'}
            onPress={() => props.inPersonCheckout()}
          />
          <View style={{ height: 15 }} />
          <FormOutlineButton
            secondary
            title={'Get a label to send it'}
            onPress={() => alert('Under Development')}
          />
        </View>
      </ScrollView>
    </View>
  )
}

SellBooksProcess.propTypes = {
  inPersonCheckout: PropTypes.func.isRequired
}
