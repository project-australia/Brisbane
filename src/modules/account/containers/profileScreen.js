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
    user
  }

  render () {
    return (
      <Profile
        onBackPress={this.goBack}
        user={this.state.user}
        onLogoutPress={() => console.warn('logout function here')}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
)
