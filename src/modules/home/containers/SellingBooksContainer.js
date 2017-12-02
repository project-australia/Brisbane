import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SellingBookAmount } from '../components/sellingBooks'

class SellingBooksContainer extends Component {
  render () {
    return (
      <SellingBookAmount
        sellingAmount={0}
        onAddBookPressed={() => alert('book added!')}
      />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const SellingBooks = connect(mapStateToProps, mapDispatchToProps)(SellingBooksContainer)
