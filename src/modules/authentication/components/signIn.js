import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View} from 'react-native'

import {styles} from './styles/signInScreen.styles'
import {LoginForm} from '../components/loginForm'

export class SignIn extends Component {
  static propTypes = {
    onButtonPress: func.isRequired,
    navigateToSignUp: func.isRequired,
    navigateToForgotPassword: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    })
  }

  renderFooter = () => {
    return (
      <View>
        <View style={styles.textRow}>
          <Text>Don’t have an account?</Text>
          <Button
            title='Sign up now'
            onPress={this.props.navigateToSignUp}
          />
        </View>
        <View style={styles.textRow}>
          <Text>Forgot your password?</Text>
          <Button
            title='Recover it here'
            onPress={this.props.navigateToForgotPassword}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.props.onButtonPress}
        footer={this.renderFooter()}
      />
    )
  }
}
