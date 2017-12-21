import React from 'react'
import { connect } from 'react-redux'
import { SellingBookAmount } from '../components/sellingBooks'

const SellingBooksContainer = () => (
  <SellingBookAmount
    sellingAmount={0}
    onAddBookPressed={() => alert('book added!')}
  />
)

const mapStateToProps = () => ({})

export const SellingBooks = connect(mapStateToProps)(SellingBooksContainer)
