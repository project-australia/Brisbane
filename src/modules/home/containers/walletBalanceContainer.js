import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { connect } from 'react-redux'
import { WalletBalance } from '../components/walletBalance'
import { ModalWithInputWallet } from '../../shared/components/modals/modalWithInputWallet'

import { requestWithdrawAction } from '../../../redux/actions/async/authenticationAsyncActions'
class WalletContainer extends Component {
  state = { isModalOpen: false }

  showEditModal = () => {
    const { status, club, balance } = this.props
    if (!club) {
      return this.defaultAlertPopUp('You must be logged in to view and withdraw from My Wallet.')
    }
    if (!balance || balance <= 0) {
      return this.defaultAlertPopUp(
        'There are currently no funds to withdraw. The funds become available here after we receive and inspect the books you are selling.'
      )
    }
    if (status !== 'NONE') {
      return this.defaultAlertPopUp(
        'Your funds will now be transferred to your PayPal or Venmo account. Please note that it may take up to 72 hours to show up on your account.'
      )
    }
    return this.setState({
      isModalOpen: true
    })
  }

  hideModal = async () => this.setState({ isModalOpen: false })

  confirmModal = async ({ paypalAccount, venmoAccount }) => {
    const { id } = this.props
    await this.props.requestWithdraw(id, { paypalAccount, venmoAccount })
    await this.hideModal()
    setTimeout(() => {
      this.defaultAlertPopUp('Your funds will now be transferred to your PayPal or Venmo account. Please note that it may take up to 72 hours to show up on your account.')
    }, 800)
  }

  defaultAlertPopUp = msg =>
    Alert.alert(
      'Withdraw from My Wallet',
      msg,
      [
        {
          text: 'Ok'
        }
      ],
      { cancelable: false }
    )

  render() {
    const { balance, paypalAccount, venmoAccount } = this.props
    const { isModalOpen } = this.state
    return (
      <View>
        <WalletBalance
          balance={balance || 0.0}
          onWithDrawPressed={this.showEditModal}
          onWalletViewPressed={() => alert('🛶 navigate to wallet')}
        />
        <ModalWithInputWallet
          visible={isModalOpen}
          title={'Withdraw from My Wallet'}
          paypalAccount={paypalAccount}
          venmoAccount={venmoAccount}
          onConfirm={accounts => this.confirmModal(accounts)}
          onDismiss={this.hideModal}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestWithdraw: (userId, form) =>
    dispatch(requestWithdrawAction(userId, form))
})

const mapStateToProps = ({ authentication: { user } }) => ({
  balance: user.wallet.balance,
  status: user.wallet.status,
  paypalAccount: user.wallet.paypalAccount,
  venmoAccount: user.wallet.venmoAccount,
  club: user.club,
  id: user.id
})

export const WalletBalanceAmount = connect(mapStateToProps, mapDispatchToProps)(
  WalletContainer
)
