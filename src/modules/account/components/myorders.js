import React from 'react'
import {
  AlertIOS,
  Clipboard,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native'
import moment from 'moment'

import { Navbar } from '../../shared/components/navbar'
import { MyOrderHeader } from './myorderHeader'
import { OrderBookItem } from '../../shoppingBag/components/orderBookItem'

import { styles } from './styles/networkMembers.style'

export const formatEdition = editionNumber => {
  if (editionNumber === '') return editionNumber
  switch (editionNumber) {
    case '1':
      return `${editionNumber}st edition`
    case '2':
      return `${editionNumber}nd edition`
    case '3':
      return `${editionNumber}rd edition`
    default:
      return `${editionNumber}th edition`
  }
}

const copyOrderCode = code => {
  Platform.select({
    android: () => {
      Clipboard.setString(code)
      ToastAndroid.show('Order code copied to clipboard', ToastAndroid.SHORT)
    },
    ios: () => {
      AlertIOS.alert(
        'Copy order code',
        'The order code will be copied to the clipboard',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'Copy',
            onPress: () => Clipboard.setString(code)
          }
        ]
      )
    }
  })()
}

const renderBook = (
  { authors, edition, id, images, prices, title },
  orderType
) => (
  <OrderBookItem
    key={id}
    image={images && images.medium}
    title={title}
    subtitleOne={authors}
    subtitleTwo={formatEdition(edition)}
    prices={prices}
    type={orderType}
  />
)

const renderOrder = order => {
  console.log(order)
  const formatedDate = moment(order.createdAt).format(
    'MMMM Do, YYYY [at] h:mma'
  )
  return (
    <View key={order.id} style={styles.itemWrap}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => copyOrderCode(order.id)}
      >
        <MyOrderHeader
          title={formatedDate}
          properties={[
            { title: 'Order', property: order.id },
            { title: 'Status', property: order.status }
          ]}
        />
      </TouchableOpacity>
      {order.items.map(item => renderBook(item, order.orderType))}
    </View>
  )
}

export const MyOrders = ({ navigateBack, orders }) => {
  return (
    <View style={styles.container}>
      <Navbar title={'My Orders'} onBack={navigateBack} />
      <ScrollView>{orders.map(renderOrder)}</ScrollView>
    </View>
  )
}
