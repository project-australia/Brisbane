import React, { Component } from 'react'
import { View } from 'react-native'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { signupFormType } from './profileForm'
import { styles } from './styles/loginFormStyles'

export class EmailPasswordForm extends Component {
  static propTypes = {
    form: signupFormType
  }

  setUserName = name => this.props.onChange({ name })
  setEmail = email => this.props.onChange({ email })
  setPassword = password => this.props.onChange({ password })

  render() {
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
        <FormTextInput
          onChangeText={this.setSchool}
          value={this.props.form.school}
          placeholder="School"
        />
        <FormTextInput
          onChangeText={this.setReferredBy}
          value={this.props.form.referredBy}
          placeholder="Rep's email (optional)"
        />
      </View>
    )
  }
}
