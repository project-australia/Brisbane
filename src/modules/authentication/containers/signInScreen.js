import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Button, Text, View} from 'react-native'
import {styles} from './styles/signInScreenStyles'
import {LoginForm} from '../components/loginForm'

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
