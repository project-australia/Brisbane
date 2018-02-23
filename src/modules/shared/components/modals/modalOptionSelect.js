import React from 'react'
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native'
import { Touchable } from '../touchable'

import { styles } from './styles/modalOptionSelect.style'

const renderOption = ({ title, onPress }) => (
  <Touchable key={title} onPress={onPress} style={styles.option}>
    <Text style={styles.optionText}>{title}</Text>
  </Touchable>
)

export const ModalOptionSelect = ({ isVisible, onCancel, options, title }) => (
  <Modal
    visible={isVisible}
    onRequestClose={onCancel}
    transparent
    animationType={'fade'}
  >
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={styles.darkBackground}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {options.map(renderOption)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
)
