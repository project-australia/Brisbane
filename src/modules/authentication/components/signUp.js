import React, { Component } from 'react'
import { Keyboard, Platform, ScrollView } from 'react-native'
import { bool, func, shape, string } from 'prop-types'

import { Address } from '../../../domain/Address'
import { SignUpRequest } from '../../../domain/SignUpRequest'
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
    zipCode,
    state,
    city,
    email,
    password,
    birthDateDay,
    birthDateMonth,
    birthDateYear
  } = form

  const address = new Address(street, city, 0, zipCode, state) // TODO: Remove number param from
  // constructor

  const user = new User(
    undefined,
    referredBy,
    name,
    email,
    new Date(
      Number(birthDateYear),
      Number(birthDateMonth + 1),
      Number(birthDateDay)
    ),
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
    zipCode: '',
    state: '',
    email: '',
    password: '',
    city: '',
    loading: false,
    birthDateDay: '',
    birthDateMonth: '',
    birthDateYear: '',
    keyboardHeight: 0
  }

  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardShowListener = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardShow
      )
      this.keyboardHideListener = Keyboard.addListener(
        'keyboardWillHide',
        this.keyboardHide
      )
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      this.keyboardShowListener.remove()
      this.keyboardHideListener.remove()
    }
  }

  switchForm = () => {
    this.setState({ switch: !this.state.switch })
  }
  onFormChange = value => {
    this.setState(value)
  }
  keyboardHide = () => this.setState({ keyboardHeight: 0 })
  keyboardShow = keyboard =>
    this.setState({ keyboardHeight: keyboard.endCoordinates.height })

  doSignUp = async () => {
    this.setState({ loading: true })
    try {
      const form = extractSignUpFormFromState(this.state)
      await this.props.signUpUser(form)
    } catch (err) {
      console.log('err during signup', err)
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

  componentWillReceiveProps(nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render() {
    const overlayStyle = [
      styles.container,
      { paddingBottom: this.state.keyboardHeight }
    ]

    return (
      <LoadingOverlay style={overlayStyle} isLoading={this.state.loading}>
        <ScrollView alwaysBounceVertical={false} bounces={false}>
          <EmailPasswordForm
            onChange={this.onFormChange}
            form={this.state}
            onButtonPress={this.switchForm}
          />
          <ProfileForm
            footer={this.renderFooter()}
            onChange={this.onFormChange}
            form={this.state}
            onButtonPress={this.doSignUp}
            navigateBack={this.switchForm}
          />
        </ScrollView>
      </LoadingOverlay>
    )
  }
}
