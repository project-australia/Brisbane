import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { styles } from './styles/LoginFormStyles'

export class LoginForm extends React.Component {
  static defaultProps = {
    footer: () => <View />
  }

  state = {
    email: '',
    password: '',
    loading: false
  }

  onButtonPress = () => {
    const { email, password } = this.state
    this.props.onButtonPress(email, password)
  }

  render () {
    return (
      <View style={styles.screen}>

        <View style={styles.header}>
          <Text>Ballard Books</Text>
        </View>

        <TextInput
          onChangeText={(email) => { this.setState({email}) }}
          placeholder='Username'
          autoCapitalize='none'
        />
        <TextInput
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
