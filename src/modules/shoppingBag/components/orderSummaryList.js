import React from 'react'
import { View } from 'react-native'
import { MenuTitle } from '../../shared/components/menuTitle'
import { Row } from '../../shared/components/row'

import { styles } from './styles/shoppingBagItems.style'
import { styles as rowStyles } from '../../shared/components/styles/row.style'

const renderBuyingOrders = ({ book }) => {
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

const OrderSummaryRows = props => {
  const { orders, prices, selling } = props
  return (
    <View>
      {selling ? orders.map(renderOrdersSelling) : orders.map(renderBuyingOrders)}
      <Row
        left={{ title: 'Sub total', style: rowStyles.darkTitle }}
        right={{ title: `$${prices.subTotal}`, style: rowStyles.secondaryTitle }}
      />
      { prices.bonus ?
        <Row
          left={{ title: 'Bonus', style: rowStyles.darkTitle }}
          right={{ title: `$${prices.bonus}`, style: rowStyles.secondaryTitle }}
        /> : null
      }
      <Row
        left={{ title: 'Shipping Price', style: rowStyles.darkTitle }}
        right={{ title: `$${prices.shipping}`, style: rowStyles.secondaryTitle }}
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
