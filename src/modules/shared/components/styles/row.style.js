import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginBottom: 1,
    alignItems: 'center'
  },
  sideContentWrap: {
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.baseMargin
  },
  leftTitle: {
    flex: 1,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  },
  contentTitle: {
    ...Fonts.style.description,
    color: Colors.gray700
  },
  contentSubtitle: {
    ...Fonts.style.footnote,
    color: Colors.gray500
  },
  contentSubtitleButton: {
    ...Fonts.style.caption,
    color: Colors.primary500
  },
  rightTitle: {
    marginRight: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  },
  rightValue: {
    flex: 1,
    marginRight: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray900,
    textAlign: 'right'
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
