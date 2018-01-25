import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import { View } from 'react-native'

import { styles } from './styles/signInScreen.styles'
import { SignupForm } from '../components/signupForm'
import { FormOutlineButton } from '../../shared/components/buttons'

export class SignUp extends Component {
  static propTypes = {
    onButtonPress: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired
  }

  state = { switch: false }

  updateSwitch = value => {
    this.setState({ switch: value })
  }

  renderFooter = () => {
    return (
      <FormOutlineButton
        title="Log in instead"
        onPress={this.props.navigateToSignIn}
        style={styles.lastItemSpacing}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SignupForm
          alert={this.props.alert}
          buttonText="Create Account"
          footer={this.renderFooter()}
          onButtonPress={this.props.onButtonPress}
        />
      </View>
    )
  }
}
