import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../../constants'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FlatButton } from '../buttons/index'

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

  componentWillMount () {
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

  componentWillUnmount () {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener.remove()
      this.keyboardWillHideListener.remove()
    }
  }

  componentDidMount () {
    this.fillForm()
  }

  setSchool = school => this.setState({ school })
  setTelephone = telephone => this.setState({ telephone })
  setStreet = street => this.setState({ street })
  setNumber = number => this.setState({ number })
  setZipCode = zipCode => this.setState({ zipCode })
  setAddressState = state => this.setState({ state })
  setCity = city => this.setState({ city })

  keyboardShow = keyboardData =>
    this.setState({
      keyboardHeight: keyboardData.endCoordinates.height
    })

  keyboardHide = () => this.setState({ keyboardHeight: 0 })

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
    const { onConfirm } = this.props
    const user = {}
    user.school = this.state.school
    user.telephone = this.state.telephone
    // user.address.street = this.address.street
    // user.address.number = this.address.number
    // user.address.zipCode = this.address.zipCode
    // user.address.state = this.address.state
    // user.address.city = this.address.city
    return onConfirm(user)
  }
  render () {
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
            <FormTextInput style={styles.input} value={this.state.school} onChangeText={(value) => this.setSchool(value)} placeholder='School' />
            <FormTextInput style={styles.input} value={this.state.telephone} onChangeText={(value) => this.setTelephone(value)} placeholder='Phone' />
            <FormTextInput style={styles.input} onChangeText={(value) => this.setStreet(value)} placeholder='Street' />
            <FormTextInput style={styles.input} onChangeText={(value) => this.setNumber(value)} placeholder='Number' />
            <FormTextInput style={styles.input} onChangeText={(value) => this.setZipCode(value)} placeholder='Zipcode' />
            <FormTextInput style={styles.input} onChangeText={(value) => this.setCity(value)} placeholder='City' />
            <FormTextInput style={styles.input} onChangeText={(value) => this.setAddressState(value)} placeholder='State' />
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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.cardRadius,
    marginHorizontal: Metrics.section
  },
  title: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    textAlign: 'center',
    marginHorizontal: Metrics.section,
    marginTop: Metrics.section,
    marginBottom: Metrics.doubleBaseMargin
  },
  input: {
    marginHorizontal: Metrics.section
  },
  buttonGroup: {
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row'
  },
  button: {
    flex: 1
  }
})
