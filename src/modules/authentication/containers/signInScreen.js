import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View} from 'react-native'

import {styles} from './styles/signInScreenStyles'
import {LoginForm} from '../components/loginForm'

export class SignInScreen extends Component {
  static propTypes = {
    signUp: func,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    })
  }

  onSignIn = () => {
    this.props.navigation.navigate('Home', {})
  }

  onForgotPassword = () => {
    this.props.navigation.navigate('Home', {})
  }

  renderFooter = () => {
    return (
      <View style={styles.textRow}>
        <Text>Don’t have an account?</Text>
        <Button
          title='Sign up now'
          onPress={() => this.onForgotPassword()}
        />
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.onSignIn}
        toast={this.props.alert}
        footer={this.renderFooter()}
      />
    )
  }
}
