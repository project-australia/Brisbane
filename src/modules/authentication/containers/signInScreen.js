import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bool, func, shape, string} from 'prop-types'

import { signInAction } from '../../../redux/actions/async/authActions'
import { SignIn } from '../components/signIn'

export class SignInContainer extends Component {
  static propTypes = {
    signIn: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  onSignIn = (email, password) => {
    this.props.signIn(email, password)
  }

  navigateToForgotPasswordScreen = () => {
    this.props.navigation.navigate('ForgotPassword', { email: 'duduzinhodoarrocha@gmail.com' })
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp', {})
  }

  render () {
    console.log(this.props.alert)

    return (
      <SignIn
        onButtonPress={this.onSignIn}
        navigateToForgotPassword={this.navigateToForgotPasswordScreen}
        navigateToSignUp={this.navigateToSignUp}
        alert={this.props.alert}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signInAction(email, password))
})

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
