import {StyleSheet} from 'react-native'
import {Metrics, Colors, Fonts} from '../../../../constants'

export const styles = StyleSheet.create({
  primaryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary500,
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
  darkenOutline: {
    borderColor: Colors.gray200alt,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Metrics.buttonRadius
  },
  whiteText: {
    ...Fonts.style.normal,
    color: Colors.white
  },
  primaryText: {
    ...Fonts.style.normal,
    color: Colors.primary500
  }
})
