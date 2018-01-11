import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
// import { BookSearch } from '../../home/components/searchBook'
import { ShoppingBagItems } from './shoppingBagItems'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { Navbar } from '../../shared/components/navbar'

export const ShoppingBag = props => (
  <View style={{ flex: 1 }}>
    <Navbar
      title={'Shopping Cart'}
      onBack={props.navigateBack}
    />
    <ScrollView>
      {/* Provavelmente precisaremos criar uma search bar para a shopping bag */}
      {/* <BookSearch onSubmit={props.searchBook} onScanPress={props.onScanPress} /> */}
      <ShoppingBagItems
        isSellingBooks
        title={'Books you are selling'}
        items={props.booksToSell}
        addBookTitle={'Sell more Books'}
        checkoutButtonTitle={'Sell these books'}
        totalValue={'123.45'}
      />
      <ShoppingBagItems
        title={'Books you are buying'}
        items={props.booksToBuy}
        addBookTitle={'Buy more Books'}
        checkoutButtonTitle={'Proceed to checkout'}
        totalValue={'123.45'}
      />
    </ScrollView>
  </View>
)

ShoppingBag.propTypes = {
  searchBook: PropTypes.func.isRequired,
  onScanPress: PropTypes.func.isRequired,
  booksToSell: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
  booksToBuy: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}
