import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'

import { signUpAction } from '../../../redux/actions/async/authenticationAsyncActions'
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

  onSignUp = (signUpForm) => {
    this.props.signUp(signUpForm)
  }

  navigateToSignInScreen = () => {
    this.props.navigation.navigate('SignIn')
  }

  render () {
    return (
      <SignUp
        buttonText="SIGN UP"
        alert={this.props.alert}
        signUpUser={this.onSignUp}
        navigateToSignIn={this.navigateToSignInScreen}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUpAction(email, password))
})

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignUpContainer
)
