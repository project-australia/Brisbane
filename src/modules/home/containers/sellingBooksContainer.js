import React from 'react'
import { connect } from 'react-redux'
import { SellingBookAmount } from '../components/sellingBooks'

const SellingBooksContainer = (props) => (
  <SellingBookAmount
    sellingAmount={0}
    onAddBookPressed={props.navigateToScan}
  />
)

const mapStateToProps = () => ({})

export const SellingBooks = connect(mapStateToProps)(SellingBooksContainer)
