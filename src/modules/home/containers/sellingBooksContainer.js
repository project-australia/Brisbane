import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SellingBookAmount } from '../components/sellingBooks'
import { shoppingBagSellingQuantityBooks } from '../../../redux/selectors/shoppingBagSelectors'
import { ModalSellingHome } from '../../shared/components/modals/modalSellingHome'
import { ModalMaintenance } from '../../shared/components/modals/modalMaintenance'

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
          visible={false} // use isModalOpen when maintenance mode is off
          placeholder={'Type ISBN (978... w/o dashes)'}
          title={'Sell Your Book'}
          onConfirm={isbn => this.searchByIsbn(isbn)}
          onDismiss={this.hideModal}
          goScanBook={this.goScanBook}
        />
        <ModalMaintenance // TODO: Remove when maintenance mode was off
          visible={isModalOpen}
          onDismiss={this.hideModal}
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
