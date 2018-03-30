import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, func, shape, string } from 'prop-types'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignIn } from '../components/signIn'
import { UserPropTypes } from '../propTypes/user'

const navigateBack = goBack => () => goBack()
const navigateToSignUp = navigate => () => {
  navigate('SignUp', {})
}
const navigateToForgotPasswordScreen = navigate => () => {
  navigate('ForgotPassword', {})
}

const onSignIn = props => async (email, password) => {
  try {
    await props.signIn(email, password)
  } catch (error) {
    alert('Error happened during sign in', error)
  }
}

class SignInContainer extends Component {
  static propTypes = {
    signIn: func.isRequired,
    redirectTo: string.isRequired,
    user: UserPropTypes,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired
  }

  static defaultProps = {
    redirectTo: 'Home'
  }

  static navigationOptions = {
    header: null
  }

  componentWillUpdate(nextProps) {
    const isUserLoggedIn = nextProps.user && nextProps.user !== NOT_LOGGED_IN
    if (isUserLoggedIn) {
      nextProps.navigation.navigate(nextProps.redirectTo)
    }
  }

  render() {
    return (
      <SignIn
        alert={this.props.alert}
        onButtonPress={onSignIn(this.props)}
        navigateBack={navigateBack(this.props.navigation.goBack)}
        navigateToSignUp={navigateToSignUp(this.props.navigation.navigate)}
        navigateToForgotPassword={navigateToForgotPasswordScreen(
          this.props.navigation.navigate
        )}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInAction(email, password))
})

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer
)
