import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'
import { ClubMember } from '../components/clubMember'

class ClubMembershipContainer extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  clubTenProps = () => {
    return {
      title: '10% More Club',
      buttonText: 'Yes ! I Want this one FREE',
      club: 'NONE',
      nextClub: 'TEN',
      price: 0.99
    }
  }

  clubTwentyProps = () => {
    return {
      title: '20% More Club',
      goBack: this.goBack,
      buttonText: 'Yes ! I Want this one $ 8,99/yr',
      user: this.props.user,
      club: 'TEN',
      nextClub: 'TWENTY',
      price: 8.99
    }
  }

  clubRepProps = () => {
    return {
      title: 'Invite your Friends',
      goBack: this.goBack,
      buttonText: 'Get Your 20% Only U$ 19,99/yr',
      user: this.props.user,
      club: 'TWENTY',
      price: 19.99
    }
  }

  goBack = () => this.props.navigation.goBack()
  goHome = () => this.props.navigation.navigate('Home')

  clubProps = club => {
    switch (club) {
      case 'NONE':
        return this.clubTenProps()
      case 'TEN':
        return this.clubTwentyProps()
      default:
        return this.clubRepProps()
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
