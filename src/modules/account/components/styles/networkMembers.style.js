import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  itemWrap: {
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider,
    marginBottom: Metrics.marginVertical
  },
  wrap: {
    backgroundColor: Colors.white,
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  },
  standardCardPadding: {
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.marginVertical
  },
  title: {
    color: Colors.gray700,
    ...Fonts.style.heavyDescription
  },
  textBlockWrap: {
    marginTop: Metrics.smallMargin
  },
  propertyTitle: {
    color: Colors.gray700,
    ...Fonts.style.footnote
  },
  propertyText: {
    color: Colors.gray500
  }
})
