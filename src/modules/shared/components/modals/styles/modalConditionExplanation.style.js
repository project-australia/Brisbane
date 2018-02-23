import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../constants'

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
    color: Colors.gray500,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  },
  lastText: {
    ...Fonts.style.description,
    color: Colors.gray500,
    marginBottom: Metrics.section,
    marginHorizontal: Metrics.section
  }
})
