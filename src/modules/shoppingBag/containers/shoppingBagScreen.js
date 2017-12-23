import React from 'react'
import { connect } from 'react-redux'
import { booksStub } from '../../../stubs/books'
import { ShoppingBag } from '../components/shoppingBag'

const ShoppingBagContainer = props => (
  <ShoppingBag
    books={booksStub}
    searchBook={() => alert('search book')}
    onScanPress={() => props.navigation.navigate('BookScanner', {})}
  />
)

const mapStateToProps = () => ({})

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
