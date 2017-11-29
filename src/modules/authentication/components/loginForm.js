import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'
import { styles } from './styles/loginFormStyles'
import { FormTextInput } from './formTextInput'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

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

  // FIXME: Test data only
  state = {
    email: 'eduardomoroni@gmail.com',
    password: '123456',
    loading: false
  }

  onButtonPress = async () => {
    this.setState({loading: true})
    const {email, password} = this.state
    await this.props.onButtonPress(email, password)
    this.setState({loading: false})
  }

  componentWillReceiveProps (nextProps) {
    const {showAlert, message} = nextProps.alert
    if (showAlert) { alert(message) }
  }

  render () {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading} >
        <View style={styles.header}>
          <Text style={styles.title}>Ballard Books</Text>
        </View>
        <FormTextInput
          onChangeText={email => { this.setState({email}) }}
          value={this.state.email}
          placeholder='Email Address'
          autoCapitalize='none'
        />
        <FormTextInput
          onChangeText={password => { this.setState({password}) }}
          value={this.state.password}
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
      </LoadingOverlay>
    )
  }
}
