import { StyleSheet } from 'react-native'

import { Colors, Metrics, Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    marginBottom: Metrics.baseMargin
  },
  itemBackground: {
    backgroundColor: Colors.white,
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  },
  wrapView: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider,
    alignItems: 'flex-start',
    paddingLeft: Metrics.section,
    minHeight: Metrics.inputHeight
  },
  title: {
    flex: 1,
    marginVertical: Metrics.baseMargin,
    ...Fonts.style.description,
    color: Colors.gray700
  }
})
