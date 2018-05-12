import React from 'react'
import PropTypes from 'prop-types'

import { FormButton } from '../../shared/components/buttons'
import { FormTextInput } from './formTextInput'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

// import { styles } from './styles/loginFormStyles'
import { styles } from './styles/forgotPasswordScreen.styles'

import { Colors } from '../../../constants'

export class ForgotPassword extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    resetPassword: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired
  }

  static defaultProps = {
    email: ''
  }

  constructor(props) {
    super(props)
    this.state = { email: props.email, loading: false }
  }

  setEmail = (emailValue) => {
    const email = emailValue.trim()
    this.setState({ email })
  }

  onButtonPress = async () => {
    this.setState({ loading: true })
    await this.props.resetPassword(this.state.email)
    this.setState({ loading: false })
  }

  render() {
    return (
      <LoadingOverlay isLoading={this.state.loading} style={styles.screen}>
        <FormTextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.setEmail}
          onSubmitEditing={this.onButtonPress}
          placeholder="Your email address"
          returnKeyType={'done'}
          selectionColor={Colors.secondary500}
          style={styles.topSpacing}
          value={this.state.email}
        />
        <FormButton
          title="Reset Password"
          style={styles.loginButton}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
      </LoadingOverlay>
    )
  }
}
