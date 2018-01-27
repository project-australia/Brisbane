import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import { View } from 'react-native'
import { ProfileForm } from './profileForm'

import { styles } from './styles/signInScreen.styles'
import { SignupForm } from '../components/signupForm'
import { FormOutlineButton } from '../../shared/components/buttons'

export class SignUp extends Component {
  static propTypes = {
    signUpUser: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired
  }

  state = { switch: true }

  updateSwitch = () => {
    this.setState({ switch: !this.state.switch })
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

  userProfileForm = () => (
    <ProfileForm
      alert={this.props.alert}
      buttonText="Create Account"
      footer={this.renderFooter()}
      onButtonPress={this.updateSwitch}
    />
  )

  userPasswordForm = () => (
    <SignupForm
      alert={this.props.alert}
      buttonText="Create Account"
      footer={this.renderFooter()}
      onButtonPress={this.updateSwitch}
    />
  )

  render () {
    const formToRender = this.state.switch ? this.userProfileForm() : this.userPasswordForm()
    return (
      <View style={styles.container}>
        { formToRender }
      </View>
    )
  }
}
