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
  iconRightPadding: {
    paddingRight: Metrics.baseMargin
  },
  icon: {
    aspectRatio: 1
  },
  title: {
    flex: 1,
    margin: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  }
})
