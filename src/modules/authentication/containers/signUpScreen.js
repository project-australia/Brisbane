import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'

import { signUpAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignUpForm } from '../components/signUp'

class SignUpContainer extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  componentWillUpdate(nextProps) {
    const isUserLoggedIn = nextProps.user && nextProps.user !== NOT_LOGGED_IN
    if (isUserLoggedIn) {
      nextProps.navigation.navigate('Home')
    }
  }

  onSignUp = async signUpForm => {
    await this.props.signUp(signUpForm)
  }

  navigateToSignInScreen = () => {
    this.props.navigation.navigate('SignIn')
  }

  navigateBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SignUpForm
        buttonText="SIGN UP"
        alert={this.props.alert}
        signUpUser={this.onSignUp}
        navigateToSignIn={this.navigateToSignInScreen}
        navigateBack={this.navigateBack}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  signUp: form => dispatch(signUpAction(form))
})

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignUpContainer
)
