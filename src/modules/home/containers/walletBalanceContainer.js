import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { WalletBalance } from '../components/walletBalance'

const confirmation = () =>
  Alert.alert(
    'Withdraw Solicitation',
    'Do you want request your credit?',
    [
      { text: "Yes, I'm sure", onPress: () => console.log('OK Pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }
    ],
    { cancelable: false }
  )
const WalletContainer = () => (
  <WalletBalance
    balance={15.5}
    onWithDrawPressed={confirmation}
    onWalletViewPressed={() => alert('🛶 navigate to wallet')}
  />
)

const mapStateToProps = () => ({})

export const WalletBalanceAmount = connect(mapStateToProps)(WalletContainer)
