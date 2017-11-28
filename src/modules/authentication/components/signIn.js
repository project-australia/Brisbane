import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View, TouchableWithoutFeedback} from 'react-native'

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
    }).isRequired
  }

  renderFooter = () => {
    return (
      <View>
        <View style={styles.textRow}>
          <Text>Forgot your password?</Text>
          <TouchableWithoutFeedback
            onPress={this.props.navigateToForgotPassword}
          >
            <Text>Recover it here</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textRow}>
          <Button
            title='Create an Account'
            onPress={this.props.navigateToSignUp}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='Log In'
        alert={this.props.alert}
        onButtonPress={this.props.onButtonPress}
        footer={this.renderFooter()}
      />
    )
  }
}
