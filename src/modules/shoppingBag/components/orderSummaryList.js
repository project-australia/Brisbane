import React from 'react'
import { View } from 'react-native'
import { MenuTitle } from '../../shared/components/menuTitle'
import { Row } from '../../shared/components/row'

import { styles } from './styles/shoppingBagItems.style'
import { styles as rowStyles } from '../../shared/components/styles/row.style'

const renderOrders = ({ book }) => {
  const bookPrice = book.sellPrice === 0 ? 'Donate' : `$${book.sellPrice}`
  const priceStyle = book.sellPrice === 0 ? rowStyles.lightTitle : null
  return (
    <Row
      key={book.id}
      left={{ title: book.title }}
      right={{ title: bookPrice, style: priceStyle }}
    />
  )
}

export const OrderSummaryList = ({ orders, total }) => {
  const totalString = `$${total}`
  return (
    <View style={styles.itemsWrap}>
      <MenuTitle title={'Sale Summary'} style={styles.titleWrap} />
      {orders.map(renderOrders)}
      <Row
        left={{ title: 'Total', style: rowStyles.darkTitle }}
        right={{ title: totalString, style: rowStyles.secondaryTitle }}
      />
    </View>
  )
}
