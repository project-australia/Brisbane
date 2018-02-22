import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SellingBookAmount } from '../components/sellingBooks'
import { shoppingBagSellingQuantityBooks } from '../../../redux/selectors/shoppingBagSelectors';

export class SellingBooksContainer extends Component {
  render() {
    return (
      <SellingBookAmount
        sellingAmount={this.props.total}
        onAddBookPressed={this.props.navigateToScan}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    total: shoppingBagSellingQuantityBooks(state)
  }
}

export const SellingBooks = connect(mapStateToProps)(SellingBooksContainer)
