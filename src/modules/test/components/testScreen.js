import React from 'react'
import { Button, View } from 'react-native'

import { styles } from './styles/testScreen.test'

export const TestScreen = props => {
  const navigateTo = (screen, screenProps = {}) => {
    return (
      <View style={styles.textRow}>
        <Button
          title={screen}
          onPress={() => props.navigation.navigate(screen, screenProps)}
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
    </View>
  )
}
