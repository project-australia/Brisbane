import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    marginBottom: Metrics.baseMargin
  },
  itemBackground: {
    backgroundColor: Colors.white,
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  }
})
