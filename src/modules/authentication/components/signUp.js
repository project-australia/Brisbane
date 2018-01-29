import { bool, func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { Address } from '../../../domain/Address'
import { SignUpRequest } from '../../../domain/SignUp'
import { User } from '../../../domain/User'
import { FormOutlineButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { EmailPasswordForm } from '../components/signupForm'
import { ProfileForm } from './profileForm'

import { styles } from './styles/signInScreen.styles'

const extractSignUpFormFromState = form => {
  const {
    name,
    school,
    telephone,
    referredBy,
    street,
    number,
    zipCode,
    state,
    city,
    email,
    password
  } = form

  const address = new Address(
    street,
    city,
    number,
    zipCode,
    state
  )

  const user = new User(
    undefined,
    referredBy,
    name,
    email,
    new Date(),
    telephone,
    school,
    undefined,
    undefined,
    undefined,
    address
  )

  return new SignUpRequest(email, password, user)
}

export class SignUpForm extends Component {
  static propTypes = {
    signUpUser: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired
  }

  state = {
    switch: true,
    name: '',
    school: '',
    telephone: '',
    referredBy: '',
    street: '',
    number: '',
    zipCode: '',
    state: '',
    email: '',
    password: '',
    city: '',
    loading: false
  }

  onFormChange = (value) => {
    this.setState(value)
  }

  switchForm = () => {
    console.log('this.state', extractSignUpFormFromState(this.state))
    this.setState({ switch: !this.state.switch })
  }

  doSignUp = async () => {
    this.setState({ loading: true })

    try {
      const form = extractSignUpFormFromState(this.state)
      await this.props.signUpUser(form)
    } catch (err) {
      console.log('err', err)
    } finally {
      this.setState({ loading: false })
    }
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

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  userProfileForm = () => (
    <ProfileForm
      footer={this.renderFooter()}
      onChange={this.onFormChange}
      form={this.state}
      onButtonPress={this.switchForm}
    />
  )

  userPasswordForm = () => (
    <EmailPasswordForm
      buttonText="Create Account"
      footer={this.renderFooter()}
      onChange={this.onFormChange}
      form={this.state}
      onButtonPress={this.doSignUp}
    />
  )

  render () {
    const formToRender = this.state.switch ? this.userProfileForm() : this.userPasswordForm()
    return (
      <LoadingOverlay
        style={styles.container}
        isLoading={this.state.loading}
      >
        { formToRender }
      </LoadingOverlay>
    )
  }
}
