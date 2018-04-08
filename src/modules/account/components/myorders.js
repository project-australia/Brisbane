import React from 'react'
import { ScrollView, View } from 'react-native'
import moment from 'moment'

import { Navbar } from '../../shared/components/navbar'
import { MyOrderHeader } from './myorderHeader'
import { ShoppingBagBook } from '../../shoppingBag/components/shoppingBagBook'

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

const renderBook = (
  {
    authors,
    edition,
    id,
    images,
    prices,
    title
  },
  orderType
) => (
  <ShoppingBagBook
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
  const formatedDate = moment(order.createdAt).format('MMMM Do, YYYY [at] h:mma')
  return (
    <View key={order.id} style={styles.itemWrap}>
      <MyOrderHeader
        title={formatedDate}
        properties={[
          { title: 'Order', property: order.id },
          { title: 'Status', property: order.status }
        ]}
      />
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
