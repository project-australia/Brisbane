import PropTypes, { string } from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import { FormButton } from '../../shared/components/buttons'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { styles } from './styles/loginFormStyles'

export const signupFormType = PropTypes.shape({
  name: string.isRequired,
  school: string.isRequired,
  telephone: string.isRequired,
  referredBy: string.isRequired,
  street: string.isRequired,
  number: string.isRequired,
  zipCode: string.isRequired,
  state: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
  city: string.isRequired
}).isRequired

export class ProfileForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    form: signupFormType
  }

  setSchool = school => this.props.onChange({ school })
  setTelephone = telephone => this.props.onChange({ telephone })
  setReferredBy = referredBy => this.props.onChange({ referredBy })
  setStreet = street => this.props.onChange({ street })
  setNumber = number => this.props.onChange({ number })
  setZipCode = zipCode => this.props.onChange({ zipCode })
  setAddressState = state => this.props.onChange({ state })
  setCity = city => this.props.onChange({ city })

  render () {
    return (
      <View style={styles.screen}>
        <FormHeader />
        <FormTextInput
          onChangeText={this.setReferredBy}
          value={this.props.form.referredBy}
          placeholder="Indicated by someone?"
        />
        <FormTextInput
          onChangeText={this.setSchool}
          value={this.props.form.school}
          placeholder="School"
        />
        <FormTextInput
          onChangeText={this.setTelephone}
          value={this.props.form.telephone}
          placeholder="Phone"
          autoCapitalize="none"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setStreet}
          value={this.props.form.street}
          placeholder="Street"
        />
        <FormTextInput
          onChangeText={this.setNumber}
          value={this.props.form.number}
          placeholder="Number"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setZipCode}
          value={this.props.form.zipCode}
          placeholder="Zip Code"
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setCity}
          value={this.props.form.city}
          placeholder="City"
        />
        <FormTextInput
          onChangeText={this.setAddressState}
          value={this.props.form.state}
          placeholder="State"
        />
        <FormButton
          title={'Create your account'}
          onPress={() => this.props.onButtonPress()}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </View>
    )
  }
}
