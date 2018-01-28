import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  multilineInput: {
    ...Fonts.style.input,
    height: Metrics.inputMultilineHeight,
    color: Colors.gray900,
    borderColor: Colors.gray200alt,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.marginHorizontal
  }
})
