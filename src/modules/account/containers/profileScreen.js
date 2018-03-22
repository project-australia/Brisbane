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
    isModalOpen: false,
    isModalInputMultiline: false,
    modalTitle: ''
  }

  showEditModal = modalTitle =>
    this.setState({
      modalTitle,
      isModalOpen: true,
      isModalInputMultiline: modalTitle === 'Address'
    })

  hideEditModal = () =>
    this.setState({
      modalTitle: '',
      isModalOpen: false,
      isModalInputMultiline: false
    })

  updateData = (userId, data) => {
    this.props.updateProfile(userId, data)
    this.hideEditModal()
  }

  render() {
    return (
      <Profile
        onBackPress={this.goBack}
        user={this.props.user}
        onLogoutPress={this.props.logOut}
        navigateToNetwork={this.navigateToNetwork}
        navigateToMyOrders={this.navigateToMyOrders}
        showEditModal={this.showEditModal}
        isEditModalOpen={this.state.isModalOpen}
        modalTitle={this.state.modalTitle}
        onConfirmModal={this.updateData}
        onDismissModal={this.hideEditModal}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToNetwork = () => this.props.navigation.navigate('NetworkMembers', {})
  navigateToMyOrders = () => this.props.navigation.navigate('MyOrders', {})
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
