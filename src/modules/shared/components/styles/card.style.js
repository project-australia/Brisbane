import { StyleSheet } from 'react-native'

import { Colors, Metrics, Values } from '../../../../constants'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius * 2,
    ...Values.elevation1
  },
  bleedingCard: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.divider
  }
})
