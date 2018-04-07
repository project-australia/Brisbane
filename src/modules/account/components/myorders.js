import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Navbar } from '../../shared/components/navbar'

import { styles } from './styles/networkMembers.style'

const renderOrder = order => (
  <View key={order.id} style={styles.wrap}>
    <Text numberOfLines={1} style={styles.title}>
      {order.id}
    </Text>
    {order.items.map(book => (
      <Text key={book.id} numberOfLines={1} style={styles.title}>
        {book.title}
      </Text>
    ))}
  </View>
)

export const MyOrders = ({ navigateBack, orders }) => {
  return (
    <View style={styles.container}>
      <Navbar title={'My Orders'} onBack={navigateBack} />
      <ScrollView>{orders.map(renderOrder)}</ScrollView>
    </View>
  )
}
