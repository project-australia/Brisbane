import React, { Component } from 'react'
import {
  Platform,
  Modal,
  Keyboard,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import { styles } from './styles/modalWithInputProfile.style'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FlatButton } from '../buttons'

export class ModalWithInputProfile extends Component {
  state = {
    keyboardHeight: 0,
    school: '',
    telephone: '',
    street: '',
    number: '',
    zipCode: '',
    state: '',
    city: ''
  }

  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardShow
      )
      this.keyboardWillHideListener = Keyboard.addListener(
        'keyboardWillHide',
        this.keyboardHide
      )
    }
  }

  componentDidMount() {
    this.fillForm()
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener.remove()
      this.keyboardWillHideListener.remove()
    }
  }

  keyboardShow = keyboardData =>
    this.setState({
      keyboardHeight: keyboardData.endCoordinates.height
    })

  keyboardHide = () => this.setState({ keyboardHeight: 0 })
  setSchool = school => this.setState({ school })
  setTelephone = telephone => this.setState({ telephone })
  setStreet = street => this.setState({ street })
  setNumber = number => this.setState({ number })
  setZipCode = zipCode => this.setState({ zipCode })
  setAddressState = state => this.setState({ state })
  setCity = city => this.setState({ city })

  fillForm = () => {
    const { user } = this.props
    this.setSchool(user.school)
    this.setTelephone(user.telephone)
    this.setStreet(user.address.street)
    this.setNumber(user.address.number)
    this.setZipCode(user.address.zipCode)
    this.setAddressState(user.address.state)
    this.setCity(user.address.city)
  }

  handleConfirm = () => {
    const { onConfirm, user } = this.props
    const profile = {
      address: {}
    }
    profile.school = this.state.school
    profile.telephone = this.state.telephone
    profile.address.street = this.state.street
    profile.address.number = this.state.number
    profile.address.zipCode = this.state.zipCode
    profile.address.state = this.state.state
    profile.address.city = this.state.city
    return onConfirm(user.id, profile)
  }
  render() {
    const { onDismiss, visible } = this.props
    const overlayStyle = StyleSheet.flatten([
      styles.overlay,
      { paddingBottom: this.state.keyboardHeight }
    ])
    return (
      <Modal
        visible={visible}
        transparent
        animationType={'fade'}
        onRequestClose={onDismiss}
      >
        <View style={overlayStyle}>
          <View style={styles.card}>
            <Text style={styles.title}>Edit Your Profile</Text>
            <ScrollView>
              <FormTextInput
                style={styles.input}
                value={this.state.school}
                onChangeText={value => this.setSchool(value)}
                placeholder="School"
              />
              <FormTextInput
                style={styles.input}
                value={this.state.telephone}
                onChangeText={value => this.setTelephone(value)}
                placeholder="Phone"
              />
              <FormTextInput
                style={styles.input}
                value={this.state.street}
                onChangeText={value => this.setStreet(value)}
                placeholder="Street"
              />
              <FormTextInput
                style={styles.input}
                value={this.state.city}
                onChangeText={value => this.setCity(value)}
                placeholder="City"
              />
              <FormTextInput
                style={styles.input}
                value={this.state.state}
                onChangeText={value => this.setAddressState(value)}
                placeholder="State"
              />
              {/* <FormTextInput
                style={styles.input}
                value={this.state.number}
                onChangeText={value => this.setNumber(value)}
                placeholder="Number"
              /> */}
              <FormTextInput
                style={styles.input}
                value={this.state.zipCode}
                onChangeText={value => this.setZipCode(value)}
                placeholder="Zip Code"
              />

            </ScrollView>
            <View style={styles.buttonGroup}>
              <FlatButton
                secondary
                containerStyle={styles.button}
                title={'Cancel'}
                onPress={onDismiss}
              />
              <FlatButton
                secondary
                containerStyle={styles.button}
                title={'Confirm'}
                onPress={() => this.handleConfirm()}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
