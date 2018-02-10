import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from '../components/profile'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'

class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  }

  state = {
    isEditModalOpen: false,
    isModalInputMultiline: false,
    modalTitle: ''
  }

  showEditModal = modalTitle =>
    this.setState({
      modalTitle,
      isEditModalOpen: true,
      isModalInputMultiline: modalTitle === 'Address'
    })

  hideEditModal = () =>
    this.setState({
      modalTitle: '',
      isEditModalOpen: false,
      isModalInputMultiline: false
    })

  updateData = (userId, data) => {
    this.props.updateProfile(userId, data)
    this.hideEditModal()
  }

  render () {
    return (
      <Profile
        onBackPress={this.goBack}
        user={this.props.user}
        onLogoutPress={this.props.logOut}
        navigateToNetwork={this.navigateToNetwork}
        navigateToWallet={this.navigateToWallet}
        showEditModal={this.showEditModal}
        isEditModalOpen={this.state.isEditModalOpen}
        modalTitle={this.state.modalTitle}
        onConfirmModal={this.updateData}
        onDismissModal={this.hideEditModal}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToNetwork = () =>
    this.props.navigation.navigate('NetworkMembers', {
      network: this.state.user.network
    })
  navigateToWallet = () => alert('navigate to my wallet')
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, form) => dispatch(updateProfileAction(userId, form)),
  logOut: () => dispatch(logOutAction())
})

const mapStateToProps = ({ authentication: { user } }) => ({
  user
})

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
)
