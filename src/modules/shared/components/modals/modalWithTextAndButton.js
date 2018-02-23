import React from 'react'
import { Modal, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Navbar } from '../navbar'
import { SolidButton } from '../buttons'
import { styles } from './styles/modalWithTextAndButton.style'

const buildParagraph = paragraph => (
  <Text style={styles.text} key={paragraph}>
    {paragraph}
  </Text>
)

export const ModalWithTextAndButton = ({
  isVisible,
  onCancel,
  title,
  paragraphs,
  buttonTitle,
  onPressButton
}) => (
  <Modal visible={isVisible} onRequestClose={onCancel} animationType={'slide'}>
    <Navbar title={title} onBack={onCancel} ignoreAndroidStatusBar />
    <ScrollView>{paragraphs.map(buildParagraph)}</ScrollView>
    {onPressButton && (
      <SolidButton title={buttonTitle} onPress={onPressButton} />
    )}
  </Modal>
)

ModalWithTextAndButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonTitle: PropTypes.string,
  onPressButton: PropTypes.func
}

ModalWithTextAndButton.defaultProps = {
  buttonTitle: '',
  onPressButton: () => {}
}
