import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './styles/forgotPasswordScreen.styles'
import { Button, TextInput, View } from 'react-native'

export class ForgotPassword extends React.Component {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    email: PropTypes.string
  }

  state = { email: '' }

  render () {
    return (
      <View style={styles.screen}>
        <TextInput
          onChangeText={email => { this.setState({email}) }}
          autoCapitalize='none'
          value={this.state.email}
        />
        <View style={styles.centralized}>
          <Button
            style={styles.loginButton}
            title='reset password'
            onPress={() => this.props.resetPassword(this.state.email)}
          />
        </View>
      </View>
    )
  }
}
