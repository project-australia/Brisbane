import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  row: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  },
  rowInfo: {
    paddingVertical: Metrics.marginVertical,
    paddingLeft: Metrics.section,
    flexDirection: 'column',
    flex: 1
  },
  description: {
    color: Colors.gray700,
    ...Fonts.style.footnote
  },
  title: {
    color: Colors.gray900,
    ...Fonts.style.normal
  }
})
