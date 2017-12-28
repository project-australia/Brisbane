import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  title: {
    color: Colors.gray900,
    marginHorizontal: Metrics.section,
    marginTop: Metrics.marginVertical,
    marginBottom: Metrics.baseMargin,
    ...Fonts.style.navbarTitle
  },
  author: {
    color: Colors.gray500,
    marginHorizontal: Metrics.section,
    marginBottom: Metrics.marginVertical,
    ...Fonts.style.footnote
  }
})
