import React from 'react'
import { Button, View } from 'react-native'
import { payWithPayPal } from '../../../services/paypal'

import { styles } from './styles/testScreen.test'

export const TestScreen = props => {
  const navigateTo = (routeName, params = {}, action) => {
    return (
      <View style={styles.textRow}>
        <Button
          title={routeName}
          onPress={() => props.navigation.navigate(routeName, params, action)}
        />
      </View>
    )
  }

  const openPayPalScreen = () => {
    return (
      <View style={styles.textRow}>
        <Button
          title={'PayPal Payment Screen'}
          onPress={() => payWithPayPal('150.55', 'Testing PayPalPayment', alert, alert)}
        />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {navigateTo('SignIn')}
      {navigateTo('Home')}
      {navigateTo('Profile')}
      {navigateTo('ManageAccount')}
      {navigateTo('BookScanner')}
      {navigateTo('BookSelling', {isbn: 9781483358505})}
      {navigateTo('BookList')}
      {navigateTo('ShoppingBag')}
      {navigateTo('BuyBooksProcess')}
      {navigateTo('SellBooksProcess')}
      {openPayPalScreen()}
    </View>
  )
}
