import React from 'react'
import { connect } from 'react-redux'
import { WalletBalance } from '../components/walletBalance'

const WalletContainer = () => (
  <WalletBalance
    balance={15.5}
    onWithDrawPressed={() => alert('💸 money gone!')}
    onWalletViewPressed={() => alert('🛶 navigate to wallet')}
  />
)

const mapStateToProps = () => ({})

export const WalletBalanceAmount = connect(mapStateToProps)(WalletContainer)
