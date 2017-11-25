import { connect } from 'react-redux'
import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'

import {LoginForm} from '../components/loginForm'
import { signUpAction } from '../../../redux/actions/async/authActions'

export class SignUpContainer extends Component {
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

const mapStateToProps = (state) => ({
  alert: state.auth.alert
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUpAction(email, password))
})

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
