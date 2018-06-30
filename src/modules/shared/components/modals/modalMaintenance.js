import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { FormButton } from '../buttons/index'
import { styles } from './styles/modalWithInput.style'

export class ModalMaintenance extends Component {
  state = {
    keyboardHeight: 0,
    inputValue: ''
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
            <Text style={styles.title}>SELL Feature on App is Under Maintenance</Text>
            <Text style={styles.textAlignLeft}>​ Please email a picture of the ISBN that starts with 978 found on the barcode or the copyright page to info@ballardbooks.com and we'll get back to you with a quote promptly!</Text>
            <View style={styles.buttonGroup}>
              <FormButton
                style={styles.searchButton}
                title={'Ok'}
                onPress={onDismiss}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
