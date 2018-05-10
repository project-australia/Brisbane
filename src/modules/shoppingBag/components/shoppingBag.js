import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { ShoppingBagItems } from './shoppingBagItems'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { Navbar } from '../../shared/components/navbar'

export const ShoppingBag = props => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar
        title={'Shopping Cart'}
        onBack={props.navigateBack}
        rightIcons={props.navRightIcons}
      />
      <ScrollView>
        <ShoppingBagItems
          title={'Books you are acquiring'}
          items={props.booksToBuy}
          addBookTitle={'Buy more Books'}
          onPressMoreBooks={props.navigateToHome}
          checkoutButton={{
            title: 'Proceed to Checkout',
            onPress: props.navigateToBuyCheckout
          }}
          totalPrice={props.totalBuyingPrice}
          removeItemFromShoppingBag={props.removeItemFromShoppingBag}
        />
        <ShoppingBagItems
          isSellingBooks
          title={'Books you are selling'}
          items={props.booksToSell}
          addBookTitle={'Sell more Books'}
          onPressMoreBooks={props.navigateToHome}
          checkoutButton={{
            title: 'Proceed to Checkout',
            onPress: props.navigateToSellCheckout
          }}
          totalPrice={props.totalSellingPrice}
          removeItemFromShoppingBag={props.removeItemFromShoppingBag}
        />
      </ScrollView>
    </View>
  )
}

ShoppingBag.propTypes = {
  navigateToHome: PropTypes.func.isRequired,
  removeItemFromShoppingBag: PropTypes.func.isRequired,
  booksToSell: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
  booksToBuy: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
  totalBuyingPrice: PropTypes.number.isRequired,
  totalSellingPrice: PropTypes.number.isRequired
}
