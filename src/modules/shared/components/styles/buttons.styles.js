import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  primaryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary500,
    height: Metrics.inputHeight
  },
  secondaryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary500,
    height: Metrics.inputHeight
  },
  transparentButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Metrics.inputHeight
  },
  primaryOutline: {
    borderColor: Colors.primary500,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Metrics.buttonRadius
  },
  secondaryOutline: {
    borderColor: Colors.secondary500,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Metrics.buttonRadius
  },
  darkenOutline: {
    borderColor: Colors.gray200alt,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius
  },
  bottomRadius: {
    borderBottomRightRadius: Metrics.cardRadius,
    borderBottomLeftRadius: Metrics.cardRadius
  },
  flat: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Metrics.inputHeight,
    paddingHorizontal: Metrics.section
  },
  whiteText: {
    ...Fonts.style.normal,
    color: Colors.white
  },
  whiteSubtitle: {
    ...Fonts.style.description,
    color: Colors.white
  },
  primaryText: {
    ...Fonts.style.normal,
    color: Colors.primary500
  },
  primarySubtitle: {
    ...Fonts.style.description,
    color: Colors.primary500
  },
  secondaryText: {
    ...Fonts.style.normal,
    color: Colors.secondary500
  },
  secondarySubtitle: {
    ...Fonts.style.description,
    color: Colors.secondary500
  }
})
