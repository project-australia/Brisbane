import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native'
import { bool, func, shape, string } from 'prop-types'

import { User } from '../../../domain/User'
import { EmailPasswordForm } from '../components/signupForm'
import { SignUpRequest } from '../../../domain/SignUpRequest'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { BackButtonFloating } from '../../shared/components/buttons/backButtonFloating'

import { styles } from './styles/signInScreen.styles'

const extractSignUpFormFromState = form => {
  const { name, email, password, school, referredBy } = form

  // TODO: Refactor this constructor
  const user = new User(
    undefined,
    referredBy,
    name,
    email,
    undefined,
    undefined,
    school
  )

  return new SignUpRequest(email, password, user)
}

export class SignUpForm extends Component {
  static propTypes = {
    signUpUser: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired,
    navigateBack: func.isRequired
  }

  state = {
    name: '',
    email: '',
    school: '',
    password: '',
    loading: false,
    referredBy: '',
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
        <EmailPasswordForm
          form={this.state}
          onChange={this.onFormChange}
          onButtonPress={this.doSignUp}
          navigateToSignIn={this.props.navigateToSignIn}
        />
        <BackButtonFloating onPress={this.props.navigateBack} />
      </LoadingOverlay>
    )
  }
}
