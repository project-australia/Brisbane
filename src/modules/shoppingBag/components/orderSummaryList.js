import React from 'react'
import { View } from 'react-native'
import { MenuTitle } from '../../shared/components/menuTitle'
import { Row } from '../../shared/components/row'

import { styles } from './styles/shoppingBagItems.style'
import { styles as rowStyles } from '../../shared/components/styles/row.style'

const renderItem = (id, title, price, style) => (
  <Row
    key={id}
    left={{ title }}
    right={{ title: price, style }}
  />
)

const renderBuyingOrders = (item) => {
  const { book, type } = item
  const { id, title, prices } = book

  if (type === 'BUY') {
    return renderItem(id, title, prices.buy)
  }

  if (type === 'RENT') {
    return renderItem(id, title, prices.rent, rowStyles.lightTitle)
  }

  return null
}

const renderOrdersSelling = ({ book }) => {
  const bookPrice = book.prices.sell === 0 ? 'Donate' : `$${book.prices.sell}`
  const priceStyle = book.prices.sell === 0 ? rowStyles.lightTitle : null

  return renderItem(book.id, book.title, bookPrice, priceStyle)
}

const OrderSummaryRows = props => {
  const { orders, prices, selling } = props
  return (
    <View>
      {selling
        ? orders.map(renderOrdersSelling)
        : orders.map(renderBuyingOrders)}
      <Row
        left={{ title: 'Sub total', style: rowStyles.darkTitle }}
        right={{
          title: `$${prices.subTotal}`,
          style: rowStyles.secondaryTitle
        }}
      />
      {prices.bonus ? (
        <Row
          left={{ title: 'Bonus', style: rowStyles.darkTitle }}
          right={{ title: `$${prices.bonus}`, style: rowStyles.secondaryTitle }}
        />
      ) : null}
      <Row
        left={{ title: 'Shipping Price', style: rowStyles.darkTitle }}
        right={{
          title: `$${prices.shipping}`,
          style: rowStyles.secondaryTitle
        }}
      />
      <Row
        bold
        left={{ title: 'Total', style: rowStyles.darkTitle }}
        right={{ title: `$${prices.total}`, style: rowStyles.secondaryTitle }}
      />
    </View>
  )
}

export const OrderSummaryList = props => {
  return (
    <View style={styles.itemsWrap}>
      <MenuTitle title={'Sale Summary'} style={styles.titleWrap} />
      <OrderSummaryRows {...props} />
    </View>
  )
}
