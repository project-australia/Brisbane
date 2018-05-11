import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FlatButton } from '../buttons/index'
import { styles } from './styles/modalWithInputWallet.style'

export class ModalWithInputWallet extends Component {
  state = {
    keyboardHeight: 0,
    inputValue: '',
    paypalAccount: '',
    venmoAccount: ''
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

  // componentDidMount = () => {
  //  const { venmoAccount, paypalAccount } = this.props
  //  paypalAccount ? this.setState({ paypalAccount }) : null
  // }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener.remove()
      this.keyboardWillHideListener.remove()
    }
  }

  setInput = inputValue => this.setState(inputValue)

  keyboardShow = keyboardData =>
    this.setState({
      keyboardHeight: keyboardData.endCoordinates.height
    })
  keyboardHide = () => this.setState({ keyboardHeight: 0 })

  renderInput = inputType => {
    return (
      <View>
        <Text style={styles.text}>Paypal</Text>
        <FormTextInput
          value={this.state.paypalAccount}
          style={styles.input}
          placeholder='Inform your Account'
          onChangeText={value => this.setInput({paypalAccount: value})}
        />
        <Text style={styles.textDivisor}>or</Text>
        <Text style={styles.text}>Venmo</Text>
        <FormTextInput
          value={this.state.venmoAccount}
          style={styles.input}
          placeholder='Phone Number or Username'
          onChangeText={value => this.setInput({venmoAccount: value})}
          editable={this.state.paypalAccount || false} // TODO need to be fixed
        />
      </View>
    )
  }

  render() {
    const { onConfirm, onDismiss, visible, title } = this.props
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
            <Text style={styles.title}>{title}</Text>
            {this.renderInput()}
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
                onPress={() => onConfirm(this.state.inputValue)}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
