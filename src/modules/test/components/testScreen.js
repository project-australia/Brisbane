import React from 'react'
import { Button, ScrollView, View } from 'react-native'
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
          onPress={() =>
            payWithPayPal('150.55', 'Testing PayPalPayment', alert, alert)
          }
        />
      </View>
    )
  }

  return (
    <ScrollView>
      {navigateTo('Home')}
      {navigateTo('SignIn')}
      {navigateTo('SignUp')}
      {navigateTo('Profile')}
      {navigateTo('BookScanner')}
      {navigateTo('ShoppingBag')}
      {navigateTo('ConfirmationScreen')}
      {navigateTo('BookDetails', {
        isbn: '978-1451639612',
        screenType: 'SELL'
      })}
      {navigateTo('BookList')}
      {navigateTo('ShoppingBag')}
      {navigateTo('ClubMembership')}
      {openPayPalScreen()}
    </ScrollView>
  )
}
