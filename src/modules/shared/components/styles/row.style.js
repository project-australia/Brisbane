import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginBottom: 1,
    alignItems: 'center'
  },
  leftTitle: {
    flex: 1,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  },
  rightTitle: {
    marginRight: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  },
  darkTitle: {
    color: Colors.gray900
  },
  lightTitle: {
    color: Colors.gray500
  },
  secondaryTitle: {
    color: Colors.secondary500,
    ...Fonts.style.heavyDescription
  }
})
