import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormHeader } from './formHeader'
import { styles } from './styles/loginFormStyles'
import { Colors } from '../../../constants'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

export class SignupForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  state = {
    email: '',
    password: '',
    name: '',
    loading: false
  }

  setUserName = name => this.setState({ name })

  setEmail = email => this.setState({ email })
  setPassword = password => this.setState({ password })

  onButtonPress = async () => {
    this.setState({ loading: true })
    const { email, password } = this.state
    await this.props.onButtonPress(email, password)
    this.setState({ loading: false })
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render () {
    return (
      <LoadingOverlay
        style={styles.screen}
        isLoading={this.state.loading}
      >
        <FormHeader />
        <FormTextInput
          onChangeText={this.setUserName}
          value={this.state.name}
          placeholder="Name"
        />
        <FormTextInput
          onChangeText={this.setEmail}
          value={this.state.email}
          placeholder="Email address"
          autoCapitalize="none"
          style={styles.itemSpacing}
          keyboardType="email-address"
        />
        <FormTextInput
          onChangeText={this.setPassword}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </LoadingOverlay>
    )
  }
}
