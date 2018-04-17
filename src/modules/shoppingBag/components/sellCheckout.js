import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { User } from '../../../domain/User'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

import { Navbar } from '../../shared/components/navbar'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { CheckoutAddress } from './checkoutAddress'
import { OrderSummaryList } from './orderSummaryList'
import { MenuTitle } from '../../shared/components/menuTitle'
import { FormButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

export const SellCheckout = props => {
  return (
    <LoadingOverlay style={styles.container} isLoading={props.isLoading}>
      <Navbar
        title={`Selling ${props.books.length} Books`}
        onBack={props.navigateBack}
      />
      <ScrollView>
        <OrderSummaryList orders={props.books} prices={props.prices} selling />
        <CheckoutAddress address={props.user.address} />
        <MenuTitle title={'Checkout'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Choose a method to finalize your transaction
          </Text>
          <FormButton
            secondary
            title={'Local Pick Up near Provo and Orem'}
            onPress={props.inPersonCheckout}
          />
          <View style={{ height: 15 }} />
          <FormButton
            secondary
            title={'Receive a Prepaid Shipping Labe'}
            onPress={props.inGetLabelCheckout}
          />
        </View>
      </ScrollView>
    </LoadingOverlay>
  )
}

SellCheckout.propTypes = {
  prices: PropTypes.object.isRequired,
  user: PropTypes.instanceOf(User),
  inPersonCheckout: PropTypes.func.isRequired,
  inGetLabelCheckout: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

SellCheckout.defaultProps = {
  books: []
}
