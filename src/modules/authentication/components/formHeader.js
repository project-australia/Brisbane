import React from 'react'
import { Text, View } from 'react-native'
import { AppStatusBar } from '../../shared/components/appStatusBar'
import { styles } from './styles/loginFormStyles'

export const FormHeader = () => (
  <View>
    <AppStatusBar />
    <View style={styles.header}>
      <Text style={styles.title}>Ballard Books</Text>
    </View>
  </View>
)
