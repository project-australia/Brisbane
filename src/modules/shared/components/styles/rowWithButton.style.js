import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider,
    alignItems: 'center',
    paddingLeft: Metrics.section,
    minHeight: Metrics.inputHeight
  },
  title: {
    flex: 1,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  }
})
