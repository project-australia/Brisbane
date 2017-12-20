import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignInScreen } from '../../authentication/containers/signInScreen'

export class AuthenticationFilter extends Component {
  static defaultProps = {
    redirectTo: (
      <View style={{flex: 1}}>
        <Text>ONLY FOR AUTHORIZED USER</Text>
        <SignInScreen />
      </View>
    )
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.node
  }
  onUserNotAuthorized = () => this.props.redirectTo
  onUserAuthorized = () => this.props.children
  isUserAuthorized = () => this.props.user !== NOT_LOGGED_IN
  render = () => this.isUserAuthorized() ? this.onUserAuthorized() : this.onUserNotAuthorized()
}

const mapStateToProps = state => ({ user: state.authentication.user })

export const AuthenticatedHOC = connect(mapStateToProps)(AuthenticationFilter)
