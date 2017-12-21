import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './styles/forgotPasswordScreen.styles'
import { Button, TextInput, View } from 'react-native'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

export class ForgotPassword extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    resetPassword: PropTypes.func.isRequired
  }

  static defaultProps = {
    email: ''
  }

  constructor (props) {
    super(props)
    this.state = { email: props.email, loading: false }
  }

  onButtonPress = async () => {
    this.setState({ loading: true })
    await this.props.resetPassword(this.state.email)
    this.setState({ loading: false })
  }

  render () {
    return (
      <LoadingOverlay isLoading={this.state.loading} style={styles.screen}>
        <TextInput
          onChangeText={email => {
            this.setState({ email })
          }}
          value={this.state.email}
          autoCapitalize="none"
        />
        <View style={styles.centralized}>
          <Button
            title="reset password"
            style={styles.loginButton}
            onPress={this.onButtonPress}
          />
        </View>
      </LoadingOverlay>
    )
  }
}
