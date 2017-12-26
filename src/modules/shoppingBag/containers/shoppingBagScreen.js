import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingBag } from '../components/shoppingBag'
import {ShoppingBagItemPropType} from '../propTypes/ShoppingBagItem'

const ShoppingBagContainer = props => (
  <ShoppingBag
    items={props.items}
    searchBook={() => alert('search book')}
    onScanPress={() => props.navigation.navigate('BookScanner', {})}
  />
)

ShoppingBagContainer.propTypes = {
  items: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

const mapStateToProps = state => ({ items: state.shoppingBag })

export const ShoppingBagScreen = connect(mapStateToProps)(ShoppingBagContainer)
