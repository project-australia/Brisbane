import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { connect } from 'react-redux'
import { WalletBalance } from '../components/walletBalance'
import { ModalWithInput } from '../../shared/components/modals/modalWithInput'

import { requestWithdrawAction } from '../../../redux/actions/async/authenticationAsyncActions'
class WalletContainer extends Component {
  state = { isEditModalOpen: false }

  showEditModal = () => {
    const { status, club } = this.props
    if (!club) {
      return this.defaultAlertPopUp('You need to be logged.')
    }
    if (club === 'NONE') {
      return this.defaultAlertPopUp('You need get 10% or 20% Club.')
    }
    if (status !== 'NONE') {
      return this.defaultAlertPopUp('Your request is under processing')
    }
    return this.setState({
      isEditModalOpen: true
    })
  }

  hideEditModal = async () => this.setState({ isEditModalOpen: false })

  confirmModal = async paypalAccount => {
    const { id } = this.props
    await this.props.requestWithdraw(id, { paypalAccount })
    await this.hideEditModal()
  }

  defaultAlertPopUp = msg =>
    Alert.alert(
      'Withdraw Solicitation',
      msg,
      [
        {
          text: 'Ok'
        }
      ],
      { cancelable: false }
    )

  render() {
    const { ballance } = this.props
    const { isEditModalOpen } = this.state
    return (
      <View>
        <WalletBalance
          balance={ballance || 0.0}
          onWithDrawPressed={this.showEditModal}
          onWalletViewPressed={() => alert('🛶 navigate to wallet')}
        />
        <ModalWithInput
          visible={isEditModalOpen}
          placeholder={'Inform your paypal account'}
          title={'Withdraw Solicitation'}
          onConfirm={value => this.confirmModal(value)}
          onDismiss={this.hideEditModal}
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
  ballance: user.wallet.ballance,
  status: user.wallet.status,
  paypalAccount: user.wallet.paypalAccount,
  club: user.club,
  id: user.id
})

export const WalletBalanceAmount = connect(mapStateToProps, mapDispatchToProps)(
  WalletContainer
)
