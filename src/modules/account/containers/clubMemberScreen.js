import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'
import { beARepresentantRequest } from '../../../services/backend/userService'
import { ClubMember } from '../components/clubMember'

class ClubMembershipContainer extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  clubTwentyProps = () => {
    return {
      title: 'Elite Club',
      goBack: this.goBack,
      buttonText: 'Yes! I want to join the Club!',
      buttonSubtitle: '',
      user: this.props.user,
      club: 'NONE',
      nextClub: 'TWENTY',
      price: 26.97
    }
  }

  clubRepProps = () => {
    return {
      title: 'Be A Rep!',
      goBack: this.goBack,
      buttonText: 'Become a Rep',
      user: this.props.user,
      club: 'TWENTY',
      price: 0.01
    }
  }

  goBack = () => this.props.navigation.goBack()
  goHome = () => this.props.navigation.navigate('Home')

  clubProps = club => {
    switch (club) {
      case 'NONE':
        return this.clubTwentyProps()
      default:
        return this.clubRepProps()
    }
  }

  beARepresentant = async () => {
    try {
      await beARepresentantRequest(this.props.user.id)
      alert('We received your request, please check your email for more info.')
    } catch (e) {
      alert('Something wrong happened, try again in few moments')
    }
  }

  render() {
    const props = this.clubProps(this.props.user.club)

    return (
      <ClubMember
        logOut={this.props.logOut}
        updateProfile={this.props.updateProfile}
        user={this.props.user}
        goBack={this.goBack}
        goHome={this.goHome}
        beARepresentant={this.beARepresentant}
        {...props}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, form) => dispatch(updateProfileAction(userId, form)),
  logOut: () => dispatch(logOutAction())
})

const mapStateToProps = ({ authentication: { user } }) => ({
  user
})

export const ClubMembershipScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubMembershipContainer)
