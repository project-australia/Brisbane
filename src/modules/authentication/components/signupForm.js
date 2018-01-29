import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import { FormButton } from '../../shared/components/buttons'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { signupFormType } from './profileForm'
import { styles } from './styles/loginFormStyles'

export class EmailPasswordForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    onButtonPress: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    form: signupFormType
  }

  setUserName = name => this.props.onChange({ name })
  setEmail = email => this.props.onChange({ email })
  setPassword = password => this.props.onChange({ password })

  render () {
    return (
      <View style={styles.screen}>
        <FormHeader />
        <FormTextInput
          onChangeText={this.setUserName}
          value={this.props.form.name}
          placeholder="Name"
        />
        <FormTextInput
          onChangeText={this.setEmail}
          value={this.props.form.email}
          placeholder="Email address"
          autoCapitalize="none"
          style={styles.itemSpacing}
          keyboardType="email-address"
        />
        <FormTextInput
          onChangeText={this.setPassword}
          value={this.props.form.password}
          placeholder="Password"
          secureTextEntry
        />
        <FormButton
          title={'Create Account'}
          onPress={this.props.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </View>
    )
  }
}
