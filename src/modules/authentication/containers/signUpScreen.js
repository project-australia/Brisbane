import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {LoginForm} from '../components/loginForm'

export class SignUpScreen extends Component {
  static propTypes = {
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  onSignUp = () => {
    this.props.navigation.navigate('Home', {})
  }

  render () {
    return (
      <LoginForm
        onButtonPress={this.onSignUp}
        toast={this.props.alert}
        buttonText='SIGN UP'
      />
    )
  }
}
