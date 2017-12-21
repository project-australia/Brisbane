import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Metrics.navBarHeight,
    paddingTop: Metrics.statusBarHeight
  },
  titleMain: {
    color: Colors.gray900,
    flex: 1,
    marginHorizontal: Metrics.section,
    ...Fonts.style.navbarTitle
  },
  buttonGroupWrap: {
    marginRight: Metrics.marginHorizontal,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 48,
    aspectRatio: 1
  }
})
