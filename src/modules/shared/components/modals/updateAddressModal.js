import React, { Component } from 'react'
import { Modal, StyleSheet, View, Text, ScrollView } from 'react-native'
import { styles } from './styles/updateAddressModal.style'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FlatButton } from '../buttons'

export class UpdateAddressModal extends Component {
  state = {
    street: '',
    zipCode: '',
    state: '',
    city: ''
  }

  setAddressState = state => this.setState({ state })
  setZipCode = zipCode => this.setState({ zipCode })
  setStreet = street => this.setState({ street })
  setCity = city => this.setState({ city })

  componentDidMount() {
    this.fillForm()
  }

  fillForm = () => {
    const { address } = this.props
    this.setCity(address.city)
    this.setStreet(address.street)
    this.setZipCode(address.zipCode)
    this.setAddressState(address.state)
  }

  updateAddress = () => {
    const { updateUserAddress } = this.props
    const { zipCode, street, state, city } = this.state
    updateUserAddress({ zipCode, street, state, city })
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
            <Text style={styles.title}>Update Address</Text>
            <ScrollView>
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
                onPress={this.updateAddress}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
