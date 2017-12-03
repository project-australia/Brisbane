import {StyleSheet} from 'react-native'
import {Metrics, Colors, Fonts} from '../../../../constants'

export const styles = StyleSheet.create({
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
  lastItemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2
  }
})
