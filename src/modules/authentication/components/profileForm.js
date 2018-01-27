import React, { Component } from 'react'
import PropTypes, { string, number } from 'prop-types'
import { View } from 'react-native'
import { FormHeader } from './formHeader'
import { styles } from './styles/loginFormStyles'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

const alertType = PropTypes.shape({
  showAlert: PropTypes.bool.isRequired,
  message: PropTypes.string
}).isRequired

const addressType = PropTypes.shape({
  city: string.isRequired,
  street: string.isRequired,
  number: number.isRequired,
  zipCode: string.isRequired,
  state: string.isRequired
}).isRequired

const signupFormType = PropTypes.shape({
  referredBy: string,
  name: string.isRequired,
  birthDate: string.isRequired,
  telephone: string.isRequired,
  school: string.isRequired,
  address: addressType
}).isRequired

export class ProfileForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    alert: alertType,
    signUpForm: signupFormType
  }

  state = {
    name: '',
    school: '',
    phoneNumber: '',
    referralName: '',
    street: '',
    number: '',
    zipCode: '',
    state: ''
  }

  setSchool = school => this.setState({ school })
  setPhoneNumber = phoneNumber => this.setState({ phoneNumber })
  setReferralName = referralName => this.setState({ referralName })
  setStreet = street => this.setState({ street })
  setNumber = number => this.setState({ number })
  setZipCode = zipCode => this.setState({ zipCode })
  setAddressState = state => this.setState({ state })

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render () {
    return (
      <LoadingOverlay
        style={styles.screen}
        isLoading={this.state.loading}
      >
        <FormHeader />
        <FormTextInput
          onChangeText={this.setReferralName}
          value={this.state.referralName}
          placeholder="Indicated by someone?"
        />
        <FormTextInput
          onChangeText={this.setSchool}
          value={this.state.school}
          placeholder="School"
        />
        <FormTextInput
          onChangeText={this.setPhoneNumber}
          value={this.state.phoneNumber}
          placeholder="Phone"
          autoCapitalize="none"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setStreet}
          value={this.state.street}
          placeholder="Street"
        />
        <FormTextInput
          onChangeText={this.setNumber}
          value={this.state.number}
          placeholder="Number"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setZipCode}
          value={this.state.zipCode}
          placeholder="Zip Code"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setAddressState}
          value={this.state.state}
          placeholder="State"
        />
        <FormButton
          title={'Finish your registration'}
          onPress={() => this.props.onButtonPress()}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </LoadingOverlay>
    )
  }
}
