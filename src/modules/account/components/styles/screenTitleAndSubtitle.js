import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  title: {
    ...Fonts.style.navbarTitle,
    color: Colors.gray900,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  subtitle: {
    ...Fonts.style.normalKefa,
    color: Colors.gray500,
    textAlign: 'center',
    marginBottom: Metrics.section
  }
})
