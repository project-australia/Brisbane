import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from '../components/profile'

class ProfileContainer extends Component {
  render () {
    return (
      <Profile />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
