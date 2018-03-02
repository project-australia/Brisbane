import React, { Component } from 'react'
import { View, Alert } from 'react-native'
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

  onPress = () => {
    Alert.alert(
      'Selling book',
      'What do you prefer?',
      [
        {
          text: 'Scan book ISBN',
          onPress: this.props.navigateToScan
        },
        {
          text: 'Type book ISBN',
          onPress: () => this.props.navigateToSellBook('978-1451639612') // TODO: Precisa
          // aparecer um modal para receber esse valor e depois navegar para a tela
        }
      ],
      { cancelable: false }
    )
  }

  goScanBook = () => {
    this.hideModal()
    this.props.navigateToScan()
  }

  openModal = () => this.setState({isModalOpen: true})

  searchByIsbn = (isbn) => {
    this.hideModal()
    this.props.navigateToSellBook(isbn)
  }

  hideModal = async () => this.setState({ isModalOpen: false })

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
