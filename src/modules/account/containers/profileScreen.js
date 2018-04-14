import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from '../components/profile'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'

const FEEDBACK_URI = 'https://docs.google.com/forms/d/e/1FAIpQLSd6TleZE_XzhCzBGvG_AeMMeWGteMFokLzjLZw-9g3yGNlhkQ/viewform'
const BUG_REPORT_URI = 'https://docs.google.com/forms/d/e/1FAIpQLSchtW8kSfzjrqIdFgon9KC_8F-ezHN3I9rqCtKe7c4nwHmRgA/viewform'

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
        navigateToFeedbackForm={this.navigateToFeedbackForm}
        navigateToBugReportForm={this.navigateToBugReportForm}
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
  navigateToFeedbackForm = () =>
    this.props.navigation.navigate('WebView', { uri: FEEDBACK_URI })
  navigateToBugReportForm = () =>
    this.props.navigation.navigate('WebView', { uri: BUG_REPORT_URI })
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
