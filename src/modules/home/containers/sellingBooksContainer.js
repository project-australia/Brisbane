import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'

import { SellingBookAmount } from '../components/sellingBooks'
import { shoppingBagSellingQuantityBooks } from '../../../redux/selectors/shoppingBagSelectors'

export class SellingBooksContainer extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    navigateToScan: PropTypes.func.isRequired,
    navigateToSellBook: PropTypes.func.isRequired
  }

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

  render() {
    return (
      <SellingBookAmount
        sellingAmount={this.props.total}
        onAddBookPressed={this.onPress}
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
