import React from 'react'
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import { Touchable } from '../touchable'

import { Colors, Metrics, Fonts, Values } from '../../../../constants'

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

const styles = StyleSheet.create({
  darkBackground: {
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
    flex: 1
  },
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.menuHeight,
    paddingVertical: Metrics.baseMargin,
    borderRadius: Metrics.cardRadius,
    ...Values.elevation16
  },
  title: {
    ...Fonts.style.normalKefa,
    color: Colors.gray900,
    paddingHorizontal: Metrics.doubleBaseMargin,
    padding: Metrics.baseMargin
  },
  option: {
    height: Metrics.menuHeight,
    justifyContent: 'center'
  },
  optionText: {
    ...Fonts.style.description,
    color: Colors.gray700,
    textAlign: 'center'
  }
})
