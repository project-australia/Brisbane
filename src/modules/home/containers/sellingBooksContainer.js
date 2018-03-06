import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SellingBookAmount } from '../components/sellingBooks'
import { shoppingBagSellingQuantityBooks } from '../../../redux/selectors/shoppingBagSelectors'
import { ModalSellingHome } from '../../shared/components/modals/modalSellingHome'

export class SellingBooksContainer extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    navigateToScan: PropTypes.func.isRequired,
    navigateToSellBook: PropTypes.func.isRequired
  }

  state = { isModalOpen: false }

  goScanBook = () => {
    this.hideModal()
    this.props.navigateToScan()
  }

  openModal = () => this.setState({ isModalOpen: true })

  searchByIsbn = isbn => {
    this.hideModal()
    this.props.navigateToSellBook(isbn)
  }

  hideModal = () => this.setState({ isModalOpen: false })

  render() {
    const { isModalOpen } = this.state

    return (
      <View>
        <SellingBookAmount
          sellingAmount={this.props.total}
          onAddBookPressed={this.openModal}
        />
        <ModalSellingHome
          visible={isModalOpen}
          placeholder={'Type book ISBN'}
          title={'Sell your Book'}
          onConfirm={isbn => this.searchByIsbn(isbn)}
          onDismiss={this.hideModal}
          goScanBook={this.goScanBook}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    total: shoppingBagSellingQuantityBooks(state)
  }
}

export const SellingBooks = connect(mapStateToProps)(SellingBooksContainer)
