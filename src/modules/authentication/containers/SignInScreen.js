import React, { Component } from 'react'
import { func, shape, bool, string } from 'prop-types'
import { View, Text, Button } from 'react-native'
import { styles } from './styles/SignInScreenStyles'
import { LoginForm } from '../components/LoginForm'

export class SignInScreen extends Component {
  static propTypes = {
    signUp: func,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    })
  }

  renderFooter = () => {
    return (
      <View style={styles.textRow}>
        <Text>Don’t have an account?</Text>
        <Button
          title='Sign up now'
          onPress={() => this.props.navigator.push({screen: 'carona.signUp'})}
        />
        <Text>Topics</Text>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.props.signIn}
        toast={this.props.alert}
        footer={this.renderFooter()}
      />
    )
  }
}

export default SignInScreen
