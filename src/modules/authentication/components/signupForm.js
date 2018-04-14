import PropTypes, { func, string } from 'prop-types'
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
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
  password: string.isRequired
}).isRequired

export class EmailPasswordForm extends Component {
  static propTypes = {
    form: signupFormType,
    clearAlerts: func.isRequired
  }

  setUserName = name => this.props.onChange({ name })
  setEmail = email => this.props.onChange({ email })
  setPassword = password => this.props.onChange({ password })
  setSchool = school => this.props.onChange({ school })
  setReferredBy = referredBy => this.props.onChange({ referredBy })

  focusInput = inputName => this[inputName].focus()

  render() {
    return (
      <View style={styles.signUpContainer}>
        <FormHeader />
        <ScrollView>
          <FormTextInput
            autoFocus
            onChangeText={this.setUserName}
            onSubmitEditing={() => this.focusInput('emailInput')}
            placeholder="Name"
            returnKeyType={'next'}
            validationCondition={isNotEmpty}
            value={this.props.form.name}
          />
          <FormTextInput
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={this.setEmail}
            onSubmitEditing={() => this.focusInput('passwordInput')}
            placeholder="Email address"
            ref={ref => {
              this.emailInput = ref
            }}
            returnKeyType={'next'}
            style={styles.itemSpacing}
            validationCondition={isValidEmail}
            value={this.props.form.email}
          />
          <FormTextInput
            validationCondition={hasMinimumSizeOf(6)}
            onChangeText={this.setPassword}
            onSubmitEditing={() => this.focusInput('schoolInput')}
            value={this.props.form.password}
            placeholder="Password"
            ref={ref => {
              this.passwordInput = ref
            }}
            returnKeyType={'next'}
            secureTextEntry
          />
          <FormTextInput
            validationCondition={isNotEmpty}
            onChangeText={this.setSchool}
            onSubmitEditing={() => this.focusInput('repInput')}
            value={this.props.form.school}
            placeholder="School"
            ref={ref => {
              this.schoolInput = ref
            }}
            returnKeyType={'next'}
          />
          <FormTextInput
            autoCapitalize="none"
            onChangeText={this.setReferredBy}
            onSubmitEditing={this.props.onButtonPress}
            value={this.props.form.referredBy}
            placeholder="Rep's email (optional)"
            ref={ref => {
              this.repInput = ref
            }}
            returnKeyType={'done'}
          />
        </ScrollView>
        {!this.props.hasKeyboard && (
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
        )}
      </View>
    )
  }
}
