import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { FlatButton, FormOutlineButton } from '../buttons/index'
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

  setInput = inputValue => this.setState({ inputValue })

  keyboardShow = keyboardData =>
    this.setState({
      keyboardHeight: keyboardData.endCoordinates.height
    })
  keyboardHide = () => this.setState({ keyboardHeight: 0 })

  renderInput = inputType => {
    const { placeholder } = this.props
    const placeHolderMsg = placeholder || 'Insert your data here'
    return (
      <FormTextInput
        autoFocus
        style={styles.input}
        placeholder={placeHolderMsg}
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
            {this.renderInput()}
            <Text style={styles.text}>or</Text>
            <FormOutlineButton
              secondary
              title={'Scan book ISBN'}
              onPress={this.props.goScanBook}
              style={styles.input}
            />
            <View style={styles.buttonGroup}>
              <FlatButton
                secondary
                containerStyle={styles.button}
                title={'Search'}
                onPress={() => onConfirm(this.state.inputValue)}
              />
              <FlatButton
                secondary
                containerStyle={styles.button}
                title={'Cancel'}
                onPress={onDismiss}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
