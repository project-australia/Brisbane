import React from 'react'
import { View, Image, Keyboard } from 'react-native'
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
          <Image 
            style={styles.image}
            source={require('../../../assets/images/logo.png')}
          />
          <Text>Caronaboard</Text>
          <Text>Awesome Slogan</Text>
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
            text={this.props.buttonText}
            onPress={this.onButtonPress}
          />
        </View>

        {this.props.footer}
      </View>
    )
  }
}
