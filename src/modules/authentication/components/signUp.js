import React, {Component} from 'react'
import {bool, func, shape, string} from 'prop-types'
import {Text, View} from 'react-native'

import {styles} from './styles/signInScreen.styles'
import {LoginForm} from '../components/loginForm'
import {FormSwitch} from '../components/formSwitch'
import {FormOutlineButton} from '../../shared/components/buttons'

export class SignUp extends Component {
  static propTypes = {
    onButtonPress: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({showAlert: bool.isRequired, message: string}).isRequired
  }

  state = {switch: false}

  updateSwitch = (value) => {
    this.setState({switch: value})
  }

  renderFooter = () => {
    const { switchRow, switchLabel, lastItemSpacing } = styles
    return (
      <View>
        <View style={switchRow}>
          <Text style={switchLabel}>I'm representant</Text>
          <FormSwitch
            value={this.state.switch}
            onValueChange={this.updateSwitch}
          />
        </View>
        <FormOutlineButton
          title='Log in instead'
          onPress={this.props.navigateToSignIn}
          style={lastItemSpacing}
        />
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        alert={this.props.alert}
        buttonText='Create Account'
        footer={this.renderFooter()}
        onButtonPress={this.props.onButtonPress}
      />
    )
  }
}
