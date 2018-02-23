import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../../constants'

export const styles = StyleSheet.create({
  firstTitle: {
    ...Fonts.style.normalKefa,
    color: Colors.gray900,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  },
  title: {
    ...Fonts.style.normalKefa,
    color: Colors.gray900,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  },
  subtitle: {
    ...Fonts.style.description,
    color: Colors.gray900,
    marginHorizontal: Metrics.section
  },
  text: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  },
  heavy: {
    color: Colors.gray900,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600'
      }
    })
  },
  lastText: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.section,
    marginHorizontal: Metrics.section
  }
})
