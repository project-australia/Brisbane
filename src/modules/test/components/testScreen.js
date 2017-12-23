import React from 'react'
import { Button, View } from 'react-native'

import { styles } from './styles/testScreen.test'

export const TestScreen = props => {
  const navigateTo = screen => {
    return (
      <View style={styles.textRow}>
        <Button
          title={screen}
          onPress={() => props.navigation.navigate(screen, {})}
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
    </View>
  )
}
