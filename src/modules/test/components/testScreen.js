import React from 'react'
import { Button, View } from 'react-native'

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

  return (
    <View style={{ flex: 1 }}>
      {navigateTo('SignIn')}
      {navigateTo('Home')}
      {navigateTo('Profile')}
      {navigateTo('ManageAccount')}
      {navigateTo('BookScanner')}
      {navigateTo('ShoppingBag')}
      {navigateTo('BookSelling', {isbn: 9781483358505})}
      {navigateTo('PayPalCheckout', {total: '11.50'})}
    </View>
  )
}
