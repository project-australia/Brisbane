import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  wrap: {
    backgroundColor: Colors.white,
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  },
  title: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin
  }
})
