import { connect } from 'react-redux'
import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'

import { signUpAction } from '../../../redux/actions/async/authActions'
import { SignUp } from '../components/signUp'

class SignUpContainer extends Component {
  static navigationOptions = {
    title: 'SignUp',
    header: null
  }

  static propTypes = {
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  onSignUp = (email, password) => {
    this.props.signUp(email, password)
  }

  navigateToSignInScreen = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <SignUp
        onButtonPress={this.onSignUp}
        alert={this.props.alert}
        navigateToSignIn={this.navigateToSignInScreen}
        buttonText='SIGN UP'
      />
    )
  }
}

const mapStateToProps = (state) => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUpAction(email, password))
})

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
