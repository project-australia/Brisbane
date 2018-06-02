import { StyleSheet } from 'react-native'
import { Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topSpacing: {
    marginTop: Metrics.marginVertical * 3
  },
  itemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2,
    marginBottom: Metrics.marginVertical
  }
})
