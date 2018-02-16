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
      title: '10% Club Member',
      buttonText: 'Get Your 10% Only U$ 2,99/y',
      bodyText: '10% Club',
      club: 'TEN',
      price: 2.99
    }
  }

  clubTwentyProps = () => {
    return {
      title: '20% Club Member',
      goBack: this.goBack,
      buttonText: 'Get Your 20% Only U$ 19,99/y',
      bodyText: '20% Club',
      user: this.props.user,
      club: 'TWENTY',
      price: 19.99
    }
  }

  goBack = () => this.props.navigation.goBack()

  isClubTenUser = () => this.props.user.club === 'NONE'

  render() {
    const props = this.isClubTenUser()
      ? this.clubTenProps()
      : this.clubTwentyProps()

    return (
      <ClubMember
        logOut={this.props.logOut}
        updateProfile={this.props.updateProfile}
        user={this.props.user}
        goBack={this.goBack}
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
