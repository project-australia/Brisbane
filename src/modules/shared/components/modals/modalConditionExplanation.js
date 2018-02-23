import React from 'react'
import { Modal, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Navbar } from '../navbar'
import { styles } from './styles/modalConditionExplanation.style'

export const ModalConditionExplanation = ({ isVisible, onCancel }) => (
  <Modal visible={isVisible} onRequestClose={onCancel} animationType={'slide'}>
    <Navbar
      title={'Book Conditions'}
      onBack={onCancel}
      ignoreAndroidStatusBar
    />
    <ScrollView>
      <Text style={styles.firstTitle}>Used - Acceptable</Text>
      <Text style={styles.subtitle}>If no CD or Access Code</Text>
      <Text style={styles.text}>
        Ballard Books is a family business. We appreciate doing business with
        you. Book in acceptable condition. Might have wear, tear, writing,
        liquid damage, etc. May not contain supplements such as CD or access
        codes. Free tracking number. Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If with Access Code</Text>
      <Text style={styles.text}>
        INCLUDES ACCESS CODE. Ballard Books is a family business. We appreciate
        doing business with you. Book in acceptable condition. Might have wear,
        tear, writing, liquid damage, etc. Free tracking number. Expedited
        shipping available.
      </Text>
      <Text style={styles.subtitle}>If with CD</Text>
      <Text style={styles.text}>
        INCLUDES CD untested. Ballard Books is a family business. We appreciate
        doing business with you. Book in acceptable condition. Might have wear,
        tear, writing, liquid damage, etc. Free tracking number. Expedited
        shipping available.
      </Text>

      <Text style={styles.title}>Used - Good</Text>
      <Text style={styles.subtitle}>If no CD or Access Code</Text>
      <Text style={styles.text}>
        Ballard Books is a family business. We appreciate doing business with
        you. Book in good condition with minimal wear. May have highlights or
        markings. May not contain supplements such as CD or access codes. Free
        tracking number. Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If with Access Code</Text>
      <Text style={styles.text}>
        INCLUDES ACCESS CODE. Ballard Books is a family business. We appreciate
        doing business with you. Book in good condition with minimal wear. May
        have highlights or markings. Free tracking number. Expedited shipping
        available.
      </Text>
      <Text style={styles.subtitle}>If with CD</Text>
      <Text style={styles.text}>
        INCLUDES CD untested. Ballard Books is a family business. We appreciate
        doing business with you. Book in good condition with minimal wear. May
        have highlights or markings. Free tracking number. Expedited shipping
        available.
      </Text>

      <Text style={styles.title}>Used - Very Good</Text>
      <Text style={styles.subtitle}>If no CD or Access Code</Text>
      <Text style={styles.text}>
        Ballard Books is a family business. We appreciate doing business with
        you. Book in very good condition. May have highlights or markings
        inside. May not contain supplements such as CD or access codes. Free
        tracking number. Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If with Access Code</Text>
      <Text style={styles.text}>
        INCLUDES ACCESS CODE. Ballard Books is a family business. We appreciate
        doing business with you. Book in very good condition. May have
        highlights or markings inside. Free tracking number. Expedited shipping
        available.
      </Text>
      <Text style={styles.subtitle}>If with CD</Text>
      <Text style={styles.text}>
        INCLUDES CD untested. Ballard Books is a family business. We appreciate
        doing business with you. Book in very good condition. May have
        highlights or markings inside. Free tracking number. Expedited shipping
        available.
      </Text>

      <Text style={styles.title}>Used - Like New</Text>
      <Text style={styles.subtitle}>If no CD or Access Code</Text>
      <Text style={styles.text}>
        Ballard Books is a family business. We appreciate doing business with
        you. Book in like NEW condition. No highlights or markings inside. May
        not contain supplements such as CD or access codes. Free tracking
        number. Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If with Access Code</Text>
      <Text style={styles.text}>
        INCLUDES ACCESS CODE. Ballard Books is a family business. We appreciate
        doing business with you. Book in like NEW condition. No highlights or
        markings inside. Free tracking number. Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If with CD</Text>
      <Text style={styles.text}>
        INCLUDES CD untested. Ballard Books is a family business. We appreciate
        doing business with you. Book in like NEW condition. No highlights or
        markings inside. Free tracking number. Expedited shipping available.
      </Text>

      <Text style={styles.title}>New</Text>
      <Text style={styles.subtitle}>If new book</Text>
      <Text style={styles.text}>
        Ballard Books is a family business. We appreciate doing business with
        you. Book in NEW condition still in plastic. Free tracking number.
        Expedited shipping available.
      </Text>
      <Text style={styles.subtitle}>If new Access Code</Text>
      <Text style={styles.lastText}>
        Ballard Books is a family business. We appreciate doing business with
        you. Sealed Access Code. Free tracking number. Expedited shipping
        available.
      </Text>
    </ScrollView>
  </Modal>
)

ModalConditionExplanation.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
}
