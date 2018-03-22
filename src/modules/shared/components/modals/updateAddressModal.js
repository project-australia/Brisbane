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

export class UpdateAddressModal extends Component {
  state = {
    keyboardHeight: 0,
    street: '',
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
  setStreet = street => this.setState({ street })
  setZipCode = zipCode => this.setState({ zipCode })
  setAddressState = state => this.setState({ state })
  setCity = city => this.setState({ city })

  fillForm = () => {
    const { user } = this.props
    this.setCity(user.address.city)
    this.setStreet(user.address.street)
    this.setZipCode(user.address.zipCode)
    this.setAddressState(user.address.state)
  }

  handleConfirm = () => {
    const { onConfirm, user } = this.props
    const profile = {
      address: {}
    }
    profile.address.street = this.state.street
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
            <Text style={styles.title}>Edit your Profile</Text>
            <ScrollView>
              <FormTextInput
                style={styles.input}
                value={this.state.street}
                onChangeText={value => this.setStreet(value)}
                placeholder="Street"
              />
              <FormTextInput
                style={styles.input}
                value={this.state.zipCode}
                onChangeText={value => this.setZipCode(value)}
                placeholder="Zipcode"
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
                onPress={this.handleConfirm}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
