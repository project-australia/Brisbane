import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'
import { styles } from './styles/loginFormStyles'
import { FormTextInput } from './formTextInput'

export class LoginForm extends React.Component {
  static defaultProps = { footer: <View/> }
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
    loading: false
  }

  onButtonPress = () => {
    const {email, password} = this.state
    this.props.onButtonPress(email, password)
  }

  componentWillReceiveProps (nextProps) {
    const {showAlert, message} = nextProps.alert
    if (showAlert) { alert(message) }
  }

  render () {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Ballard Books</Text>
        </View>
        <FormTextInput
          onChangeText={(email) => { this.setState({email}) }}
          placeholder='Email Address'
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
