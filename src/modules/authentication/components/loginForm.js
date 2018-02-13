import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormHeader } from './formHeader'
import { styles } from './styles/loginFormStyles'
import { Colors } from '../../../constants'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

export class LoginForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  // FIXME: Test data only
  state = {
    email: 'eduardomoroni@gmail.com',
    password: '123123',
    loading: false
  }

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
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <FormHeader />
        <FormTextInput
          onChangeText={this.setEmail}
          value={this.state.email}
          placeholder="Email address"
          autoCapitalize="none"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          keyboardType="email-address"
        />
        <FormTextInput
          onChangeText={this.setPassword}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
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
