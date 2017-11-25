import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles/loginFormStyles'
import { FormTextInput } from './formTextInput'

export class LoginForm extends React.Component {
  static defaultProps = {
    footer: () => <View/>
  }

  state = {
    email: '',
    password: '',
    loading: false
  }

  onButtonPress = () => {
    const {email, password} = this.state
    console.log('form', email, password)
    this.props.onButtonPress(email, password)
  }

  render () {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Ballard Books</Text>
        </View>
        <FormTextInput
          onChangeText={(email) => { this.setState({email}) }}
          placeholder='Username'
          autoCapitalize='none'
        />
        <FormTextInput
          onChangeText={(password) => { this.setState({password}) }}
          placeholder='Password'
          secureTextEntry
        />
        <View style={styles.centralized}>
          <Button
            style={styles.loginButton}
            title={this.props.buttonText}
            onPress={this.onButtonPress}
          />
        </View>
        {this.props.footer}
      </View>
    )
  }
}
