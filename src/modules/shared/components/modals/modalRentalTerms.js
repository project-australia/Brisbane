import React from 'react'
import { Modal, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Navbar } from '../navbar'
import { SolidButton } from '../buttons'
import { styles } from './styles/modalRentalTerms.style'

export const ModalRentalTerms = ({
  isVisible,
  onCancel,
  buttonTitle,
  onPressButton
}) => (
  <Modal visible={isVisible} onRequestClose={onCancel} animationType={'slide'}>
    <Navbar title={'Rental Terms'} onBack={onCancel} ignoreAndroidStatusBar />
    <ScrollView>
      <Text style={styles.text}>
        I am at least 18 years of age and have entered into this Rental
        Agreement with Ballard Books. I understand that the textbook(s) rented
        by me is the property of Ballard Books.
      </Text>
      <Text style={styles.text}>
        I understand that I am renting this material for one semester only. If I
        need the book(s) for future semesters, I must return the material to
        Ballard Books by the deadline and re-rent the book(s) depending on
        availability.
      </Text>
      <Text style={styles.text}>
        I may return the rented textbook(s) within the first two weeks of the
        current semester to receive full refund. I understand that I will not be
        refunded for any portion of the rental fee if the book(s) was returned
        after that date. Textbooks rented in new condition that are sealed must
        be unopened to receive a full refund.
      </Text>
      <Text style={styles.text}>
        I will return the rented material to Ballard Books immediately following
        the end of the last scheduled final exam for the semester in which the
        material was rented.
      </Text>
      <Text style={styles.text}>
        Conditions Upon Return: I am fully responsible for the return of the
        rented material in salable Condition. Salable condition is defined as no
        damage to the book - spine is intact and all CDs and other component
        parts of the book(s) are present and undamaged (no tears, liquid damage,
        etc.). Very limited highlighting and writing are acceptable. Ballard
        Books determines salable condition.
      </Text>
      <Text style={styles.text}>
        Failure to Return:{' '}
        <Text style={styles.heavy}>
          Rental textbook(s) that are not returned by the due date or are
          damaged, lost, stolen or deemed
        </Text> unsalable <Text style={styles.heavy}>by</Text> Ballard Books{' '}
        <Text style={styles.heavy}>
          will automatically be charged to my Credit/Debit card account for the
          difference between the full retail price of the book(s) less the
          rental fee.
        </Text>{' '}
        The retail price is based on the retail price at time of rental.{' '}
        <Text style={styles.heavy}>I authorize</Text> Ballard Books{' '}
        <Text style={styles.heavy}>to make this charge.</Text>
      </Text>
      <Text style={styles.lastText}>
        Ballard Books is not responsible to remind me of the rental return date
        and is not responsible for items that are lost in transit from me to
        them or for items that are sent to them in error.
      </Text>
    </ScrollView>
    {onPressButton && (
      <SolidButton title={buttonTitle} onPress={onPressButton} />
    )}
  </Modal>
)

ModalRentalTerms.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
}
