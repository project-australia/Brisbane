import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FormOutlineButton, FormButton } from '../buttons/index'
import { styles } from './styles/modalWithInput.style'

export class ModalSellingHome extends Component {
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

  setInput = inputValue => this.setState({ inputValue })

  renderInput = inputType => {
    const { placeholder } = this.props
    const placeHolderMsg = placeholder || 'Insert your data here'
    return (
      <FormTextInput
        style={styles.input}
        placeholder={placeHolderMsg}
        keyboardType="numeric"
        onChangeText={value => this.setInput(value)}
      />
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
            <FormButton
              icon
              title={'Scan Book ISBN'}
              onPress={this.props.goScanBook}
              style={styles.input}
            />
            <Text style={styles.text}>or</Text>
            {this.renderInput()}
            <View style={styles.buttonGroup}>
              <FormOutlineButton
                style={styles.cancelButton}
                title={'Cancel'}
                onPress={onDismiss}
              />
              <FormButton
                style={styles.searchButton}
                title={'Search'}
                onPress={() => onConfirm(this.state.inputValue)}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
