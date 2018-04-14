import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles/signInScreen.styles'
import { LoginForm } from '../components/loginForm'
import { FormOutlineButton } from '../../shared/components/buttons'
import { ViewHandlingKeyboard } from '../../shared/components/viewHandlingKeyboard'

export class SignIn extends Component {
  static propTypes = {
    navigateBack: func.isRequired,
    onButtonPress: func.isRequired,
    navigateToSignUp: func.isRequired,
    navigateToForgotPassword: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired,
    clearAlerts: func.isRequired
  }

  state = { hasKeyboard: false }
  keyboardDidShow = () => this.setState({ hasKeyboard: true })
  keyboardDidHide = () => this.setState({ hasKeyboard: false })

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
        {!this.state.hasKeyboard && (
          <FormOutlineButton
            title="Create an Account"
            onPress={this.props.navigateToSignUp}
            style={styles.lastItemSpacing}
          />
        )}
      </View>
    )
  }

  render() {
    return (
      <ViewHandlingKeyboard
        onKeyboardShow={this.keyboardDidShow}
        onKeyboardHide={this.keyboardDidHide}
        style={{ flex: 1 }}
      >
        <LoginForm
          buttonText="Log In"
          alert={this.props.alert}
          footer={this.renderFooter()}
          clearAlerts={this.props.clearAlerts}
          onButtonPress={this.props.onButtonPress}
          navigateBack={this.props.navigateBack}
        />
      </ViewHandlingKeyboard>
    )
  }
}
