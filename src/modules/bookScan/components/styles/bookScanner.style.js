import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  titleWrap: {
    marginHorizontal: Metrics.section
  },
  description: {
    color: Colors.gray900,
    ...Fonts.style.description
  },
  descriptionGray: {
    color: Colors.gray500,
    ...Fonts.style.description
  },
  footnote: {
    color: Colors.gray500,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.footnote
  },
  textAccent: {
    color: Colors.primary500
  },
  standardSpacing: {
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.marginVertical,
    marginBottom: Metrics.marginVertical
  },
  bottomSpacing: {
    marginBottom: Metrics.baseMargin
  }
})
