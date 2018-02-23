import React from 'react'
import { View } from 'react-native'
import { MenuTitle } from '../../shared/components/menuTitle'
import { Row } from '../../shared/components/row'

import { styles } from './styles/shoppingBagItems.style'
import { styles as rowStyles } from '../../shared/components/styles/row.style'

const renderOrders = ({ book }) => {
  const bookPrice = book.price.buy
  const priceStyle = book.price.buy === 0 ? rowStyles.lightTitle : null

  return (
    <Row
      key={book.id}
      left={{ title: book.title }}
      right={{ title: bookPrice, style: priceStyle }}
    />
  )
}

const renderOrdersSelling = ({ book }) => {
  const bookPrice = book.price.sell === 0 ? 'Donate' : `$${book.price.sell}`
  const priceStyle = book.price.sell === 0 ? rowStyles.lightTitle : null

  return (
    <Row
      key={book.id}
      left={{ title: book.title }}
      right={{ title: bookPrice, style: priceStyle }}
    />
  )
}

export const OrderSummaryList = props => {
  const { orders, total, selling } = props
  return (
    <View style={styles.itemsWrap}>
      <MenuTitle title={'Sale Summary'} style={styles.titleWrap} />
      {selling ? orders.map(renderOrdersSelling) : orders.map(renderOrders)}
      <Row
        left={{ title: 'Total', style: rowStyles.darkTitle }}
        right={{ title: `$${total}`, style: rowStyles.secondaryTitle }}
      />
    </View>
  )
}
