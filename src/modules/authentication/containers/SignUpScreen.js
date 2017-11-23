import React, {Component} from 'react'
import {func, shape, bool, string} from 'prop-types'
import {LoginForm} from '../components/LoginForm'

export class SignUpScreen extends Component {
  static propTypes = {
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  render() {
    return (
      <LoginForm
        onButtonPress={this.props.signUp}
        toast={this.props.alert}
        buttonText='SIGN UP'
      />
    )
  }
}

export default SignUpScreen
