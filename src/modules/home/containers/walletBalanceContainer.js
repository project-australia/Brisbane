import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WalletBalance } from '../components/walletBalance'

class WalletBalanceContainer extends Component {
  render () {
    return (
      <WalletBalance
        balance={15.5}
        onWithDrawPressed={() => alert('💸 money gone!')}
        onWalletViewPressed={() => alert('🛶 navigate to wallet')}
      />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const WalletBalanceAmount = connect(mapStateToProps, mapDispatchToProps)(
  WalletBalanceContainer
)
