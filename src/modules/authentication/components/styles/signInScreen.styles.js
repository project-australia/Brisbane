import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.marginVertical * 2
  },
  footnote: {
    ...Fonts.style.footnote,
    color: Colors.gray500
  },
  footnoteTextButton: {
    color: Colors.gray900,
    padding: Metrics.smallMargin
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.marginVertical,
    marginBottom: Metrics.marginVertical * 2,
    marginHorizontal: Metrics.marginVertical * 3
  },
  switchLabel: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    flex: 1
  },
  lastItemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2
  }
})
