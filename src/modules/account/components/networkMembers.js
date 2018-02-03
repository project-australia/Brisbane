import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Navbar } from '../../shared/components/navbar'

import { styles } from './styles/networkMembers.style'

const renderMember = member => (
  <View key={member} style={styles.wrap}>
    <Text numberOfLines={1} style={styles.title}>
      {member}
    </Text>
  </View>
)

export const NetworkMembers = ({ navigateBack, network }) => {
  return (
    <View style={styles.container}>
      <Navbar title={'Network members'} onBack={navigateBack} />
      <ScrollView>{network.map(renderMember)}</ScrollView>
    </View>
  )
}