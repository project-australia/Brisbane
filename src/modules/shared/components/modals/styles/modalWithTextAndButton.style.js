import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../../constants'

export const styles = StyleSheet.create({
  text: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  }
})
