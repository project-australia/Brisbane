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
  darkTopOverlay: {
    ...StyleSheet.absoluteFillObject,
    bottom: undefined,
    backgroundColor: Colors.overlay,
    padding: Metrics.section,
    paddingTop: Metrics.section + Metrics.statusBarHeight
  },
  darkBottomOverlay: {
    ...StyleSheet.absoluteFillObject,
    top: undefined,
    backgroundColor: Colors.overlay
  },
  titleWrap: {
    marginHorizontal: Metrics.section
  },
  overlayTitle: {
    color: Colors.white,
    ...Fonts.style.bold
  },
  overlayDescription: {
    color: Colors.white,
    ...Fonts.style.description
  },
  description: {
    color: Colors.gray900,
    ...Fonts.style.description
  },
  cancelButtonTouchArea: {
    alignSelf: 'flex-end',
    padding: Metrics.section
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
