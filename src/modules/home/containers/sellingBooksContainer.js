import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { SellingBookAmount } from '../components/sellingBooks'
import { shoppingBagSellingQuantityBooks } from '../../../redux/selectors/shoppingBagSelectors'

export class SellingBooksContainer extends Component {
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
          onPress: () => alert('E agora? Como receberemos o ISBN?')
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
