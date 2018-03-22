import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ModalWithInputProfile } from '../components/modals/modalWithInputProfile'
import { updateProfileAction } from '../../../redux/actions/async/authenticationAsyncActions'

class ProfileContainer extends Component {
  static navigationOptions = { header: null }

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

  render() {
    return (
      <ModalWithInputProfile
        visible={this.state.isEditModalOpen}
        title={this.state.modalTitle}
        user={this.props.user}
        onConfirm={this.updateData}
        onDismiss={this.hideEditModal}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, form) => dispatch(updateProfileAction(userId, form))
})

const mapStateToProps = ({ authentication: { user } }) => ({
  user
})

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
)
