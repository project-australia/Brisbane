import React, { Component } from 'react'
import { Platform, Modal, Keyboard, StyleSheet, View, Text } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../../constants'
import { FormTextInput } from '../../../authentication/components/formTextInput'
import { InputMultiline } from '../inputs/inputMultiline'
import { FlatButton } from '../buttons/index'

export class ModalWithInput extends Component {
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
    const { multiline, placeholder } = this.props
    const placeHolderMsg = placeholder || 'Insert your data here'
    return multiline ? (
      <InputMultiline
        autoFocus
        style={styles.input}
        placeholder={placeholder}
      />
    ) : (
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
