import React from 'react'
import { connect } from 'react-redux'
import { node, object } from 'prop-types'

import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignInScreen } from '../../authentication/containers/signInScreen'

const isUserAuthorized = user => user !== NOT_LOGGED_IN

export const AuthenticationFilter = ({ user, children, navigation }) => {
  const showLoginScreen = <SignInScreen navigation={navigation} />
  return isUserAuthorized(user) ? children : showLoginScreen
}

AuthenticationFilter.propTypes = {
  children: node.isRequired,
  navigation: object
}

const mapStateToProps = state => ({ user: state.authentication.user })

export const AuthenticatedHOC = connect(mapStateToProps)(AuthenticationFilter)
