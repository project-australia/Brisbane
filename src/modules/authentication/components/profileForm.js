import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import PropTypes, { string } from 'prop-types'

import { AppStatusBar } from '../../shared/components/appStatusBar'
import { FormButton } from '../../shared/components/buttons'
import { FormTextInput } from './formTextInput'
import { Navbar } from '../../shared/components/navbar'

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
  city: string.isRequired,
  birthDateDay: string.isRequired,
  birthDateMonth: string.isRequired,
  birthDateYear: string.isRequired
}).isRequired

export class ProfileForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
    form: signupFormType
  }

  setCity = city => this.props.onChange({ city })
  setSchool = school => this.props.onChange({ school })
  setStreet = street => this.props.onChange({ street })
  setNumber = number => this.props.onChange({ number })
  setZipCode = zipCode => this.props.onChange({ zipCode })
  setAddressState = state => this.props.onChange({ state })
  setTelephone = telephone => this.props.onChange({ telephone })
  setReferredBy = referredBy => this.props.onChange({ referredBy })
  setBirthDateDay = birthDateDay => this.props.onChange({ birthDateDay })
  setBirthDateYear = birthDateYear => this.props.onChange({ birthDateYear })
  setBirthDateMonth = birthDateMonth => this.props.onChange({ birthDateMonth })

  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <Navbar title={'Almost there...'} onBack={this.props.navigateBack} />
        <ScrollView>
          <View>
            <View style={styles.bdayLabel}>
              <Text style={styles.bdayText}>Birthdate</Text>
            </View>
            <View style={styles.inputRow}>
              <FormTextInput
                style={styles.inlineInput}
                onChangeText={this.setBirthDateDay}
                value={this.props.form.birthDateDay}
                placeholder="Day"
                keyboardType="phone-pad"
              />
              <FormTextInput
                style={styles.inlineInput}
                onChangeText={this.setBirthDateMonth}
                value={this.props.form.birthDateMonth}
                placeholder="Month"
                keyboardType="phone-pad"
              />
              <FormTextInput
                style={styles.inlineInput}
                onChangeText={this.setBirthDateYear}
                value={this.props.form.birthDateYear}
                placeholder="Year"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <FormTextInput
            onChangeText={this.setReferredBy}
            value={this.props.form.referredBy}
            placeholder="Rep's email"
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
          <View style={styles.inputRow}>
            <FormTextInput
              style={styles.inlineInput}
              onChangeText={this.setNumber}
              value={this.props.form.number}
              placeholder="Number"
              keyboardType="phone-pad"
            />
            <FormTextInput
              style={styles.inlineInput}
              onChangeText={this.setZipCode}
              value={this.props.form.zipCode}
              placeholder="Zip Code"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputRow}>
            <FormTextInput
              style={styles.inlineInputTriple}
              onChangeText={this.setCity}
              value={this.props.form.city}
              placeholder="City"
            />
            <FormTextInput
              style={styles.inlineInput}
              onChangeText={this.setAddressState}
              value={this.props.form.state}
              placeholder="State"
            />
          </View>
        </ScrollView>
        <View style={styles.buttonsSpacing}>
          <FormButton
            title={'Create your account'}
            onPress={() => this.props.onButtonPress()}
            style={styles.itemSpacing}
          />
          {this.props.footer}
        </View>
      </View>
    )
  }
}
