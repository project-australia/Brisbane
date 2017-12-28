import React from 'react'
import { connect } from 'react-redux'
import { bool, func, shape, string } from 'prop-types'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { SignIn } from '../components/signIn'

const navigateToSignUp = navigate => () => {
  navigate('SignUp', {})
}
const navigateToForgotPasswordScreen = navigate => () => {
  navigate('ForgotPassword', {
    email: 'duduzinhodoarrocha@gmail.com'
  })
}

const onSignIn = props => async (email, password) => {
  try {
    await props.signIn(email, password)
    props.navigation.navigate('Home')
  } catch (error) {
    alert('Error happened during signin', error)
  }
}

const SignInContainer = props => (
  <SignIn
    alert={props.alert}
    onButtonPress={onSignIn(props)}
    navigateToSignUp={navigateToSignUp(props.navigation.navigate)}
    navigateToForgotPassword={navigateToForgotPasswordScreen(
      props.navigation.navigate
    )}
  />
)

SignInContainer.propTypes = {
  signIn: func.isRequired,
  alert: shape({
    showAlert: bool.isRequired,
    message: string
  }).isRequired
}

SignInContainer.navigationOptions = {
  title: 'SignIn',
  header: null
}

const mapStateToProps = state => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInAction(email, password))
})

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer
)
