import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View} from 'react-native'

import {styles} from './styles/signInScreen.styles'
import {LoginForm} from '../components/loginForm'

export class SignUp extends Component {
  static propTypes = {
    onButtonPress: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({showAlert: bool.isRequired, message: string}).isRequired
  }

  renderFooter = () => {
    return (
      <View>
        <View style={styles.textRow}>
          <Text>I'm representant</Text>
        </View>
        <View style={styles.textRow}>
          <Button
            title='Log in instead'
            onPress={this.props.navigateToSignIn}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        alert={this.props.alert}
        buttonText='Create Account'
        footer={this.renderFooter()}
        onButtonPress={this.props.onButtonPress}
      />
    )
  }
}
