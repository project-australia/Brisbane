import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View, TouchableWithoutFeedback} from 'react-native'

import {styles} from './styles/signInScreen.styles'
import {LoginForm} from '../components/loginForm'

export class SignIn extends Component {
  static propTypes = {
    goHome: func,
    onButtonPress: func.isRequired,
    navigateToSignUp: func.isRequired,
    navigateToForgotPassword: func.isRequired,
    alert: shape({showAlert: bool.isRequired, message: string}).isRequired
  }

  renderFooter = () => {
    return (
      <View>
        <View style={styles.textRow}>
          <Text>Forgot your password?</Text>
          <TouchableWithoutFeedback
            onPress={this.props.navigateToForgotPassword}
          >
            <View>
              <Text>Recover it here</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textRow}>
          <Button
            title='Create an Account'
            onPress={this.props.navigateToSignUp}
          />
        </View>
        <View style={styles.textRow}>
          <Text>TEST AUTHENTICATION</Text>
        </View>
        <View style={styles.textRow}>
          <Button
            title='TEST AUTHORIZATION'
            onPress={this.props.goHome}
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
        footer={this.renderFooter()}
        onButtonPress={this.props.onButtonPress}
      />
    )
  }
}
