import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingBag } from '../components/shoppingBag'
import { book } from '../../home/propTypes/book'

const ShoppingBagContainer = props => (
  <ShoppingBag
    books={props.books}
    searchBook={() => alert('search book')}
    onScanPress={() => props.navigation.navigate('BookScanner', {})}
  />
)

ShoppingBagContainer.propTypes = {
  books: PropTypes.arrayOf(book).isRequired
}

const mapStateToProps = (state) => ({books: state.shoppingBag})

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
