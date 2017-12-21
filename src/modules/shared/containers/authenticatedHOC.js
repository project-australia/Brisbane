import React, { Component } from 'react'
import { connect } from 'react-redux'
import { node, object } from 'prop-types'

import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignInScreen } from '../../authentication/containers/signInScreen'

export class AuthenticationFilter extends Component {
  static propTypes = {
    children: node.isRequired,
    navigation: object
  }

  showLoginScreen = <SignInScreen navigation={this.props.navigation} />
  isUserAuthorized = () => this.props.user !== NOT_LOGGED_IN
  render = () =>
    this.isUserAuthorized() ? this.props.children : this.showLoginScreen
}

const mapStateToProps = state => ({ user: state.authentication.user })

export const AuthenticatedHOC = connect(mapStateToProps)(AuthenticationFilter)
