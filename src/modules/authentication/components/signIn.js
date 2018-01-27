import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles/signInScreen.styles'
import { LoginForm } from '../components/loginForm'
import { FormOutlineButton } from '../../shared/components/buttons'

export class SignIn extends Component {
  static propTypes = {
    onButtonPress: func.isRequired,
    navigateToSignUp: func.isRequired,
    navigateToForgotPassword: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired
  }

  renderFooter = () => {
    return (
      <View>
        <View style={styles.textRow}>
          <Text style={styles.footnote}>Forgot your password?</Text>
          <TouchableWithoutFeedback
            onPress={this.props.navigateToForgotPassword}
          >
            <View>
              <Text style={styles.footnoteTextButton}>Recover it here</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FormOutlineButton
          title="Create an Account"
          onPress={this.props.navigateToSignUp}
          style={styles.lastItemSpacing}
        />
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText="Log In"
        alert={this.props.alert}
        footer={this.renderFooter()}
        onButtonPress={this.props.onButtonPress}
      />
    )
  }
}
