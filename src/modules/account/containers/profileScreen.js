import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from '../components/profile'

const user = {
  name: 'Bruno Talhate',
  subscription: null,
  school: 'University of Boston',
  network: ['Arnold Schwazenegger', 'Adam Smith', 'Hebert Porto']
}

class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  }

  state = {
    user,
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
  updateData = () => {
    console.warn('update user data')
    this.hideEditModal()
  }

  render () {
    return (
      <Profile
        onBackPress={this.goBack}
        user={this.state.user}
        onLogoutPress={() => console.warn('logout function here')}
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

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
)
