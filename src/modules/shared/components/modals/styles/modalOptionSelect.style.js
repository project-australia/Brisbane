import { StyleSheet } from 'react-native'
import { Colors, Metrics, Values, Fonts } from '../../../../../constants'

export const styles = StyleSheet.create({
  darkBackground: {
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
    flex: 1
  },
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.menuHeight,
    paddingVertical: Metrics.baseMargin,
    borderRadius: Metrics.cardRadius,
    ...Values.elevation16
  },
  title: {
    ...Fonts.style.normalKefa,
    color: Colors.gray900,
    paddingHorizontal: Metrics.doubleBaseMargin,
    padding: Metrics.baseMargin
  },
  option: {
    height: Metrics.menuHeight,
    justifyContent: 'center'
  },
  optionText: {
    ...Fonts.style.description,
    color: Colors.gray700,
    textAlign: 'center'
  }
})
