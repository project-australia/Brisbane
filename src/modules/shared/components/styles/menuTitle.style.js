import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Metrics.menuHeight,
    marginHorizontal: Metrics.section
  },
  title: {
    flex: 1,
    color: Colors.gray500,
    ...Fonts.style.normalKefa
  },
  buttonWrap: {
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    ...Fonts.style.normal
  }
})
