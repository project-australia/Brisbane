import PropTypes, { string } from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import { FormButton, FormOutlineButton } from '../../shared/components/buttons'
import { hasMinimumSizeOf, isNotEmpty, isValidEmail } from '../validation'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { styles } from './styles/loginFormStyles'

export const signupFormType = PropTypes.shape({
  name: string.isRequired,
  school: string.isRequired,
  referredBy: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
}).isRequired

export class EmailPasswordForm extends Component {
  static propTypes = {
    form: signupFormType
  }

  setUserName = name => this.props.onChange({ name })
  setEmail = email => this.props.onChange({ email })
  setPassword = password => this.props.onChange({ password })
  setSchool = school => this.props.onChange({ school })
  setReferredBy = referredBy => this.props.onChange({ referredBy })

  render() {
    return (
      <View style={styles.screen}>
        <FormHeader />
        <FormTextInput
          validationCondition={isNotEmpty}
          onChangeText={this.setUserName}
          value={this.props.form.name}
          placeholder="Name"
        />
        <FormTextInput
          validationCondition={isValidEmail}
          onChangeText={this.setEmail}
          value={this.props.form.email}
          placeholder="Email address"
          autoCapitalize="none"
          style={styles.itemSpacing}
          keyboardType="email-address"
        />
        <FormTextInput
          validationCondition={hasMinimumSizeOf(6)}
          onChangeText={this.setPassword}
          value={this.props.form.password}
          placeholder="Password"
          secureTextEntry
        />
        <FormTextInput
          validationCondition={isNotEmpty}
          onChangeText={this.setSchool}
          value={this.props.form.school}
          placeholder="School"
        />
        <FormTextInput
          onChangeText={this.setReferredBy}
          value={this.props.form.referredBy}
          placeholder="Rep's email (optional)"
        />
        <View style={styles.buttonsSpacing}>
          <FormButton
            title={'Create your account'}
            onPress={this.props.onButtonPress}
            style={styles.itemSpacing}
          />
          <FormOutlineButton
            title="Log in instead"
            onPress={this.props.navigateToSignIn}
            style={styles.lastItemSpacing}
          />
        </View>
      </View>
    )
  }
}
