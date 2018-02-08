import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Metrics.navBarHeight,
    paddingTop: Metrics.statusBarHeight
  },
  wrapWithoutAndroidStatusbar: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Metrics.navBarWithoutAndroidStatusbar
  },
  titleMain: {
    color: Colors.gray900,
    flex: 1,
    marginHorizontal: Metrics.section,
    ...Fonts.style.navbarTitle
  },
  title: {
    color: Colors.gray900,
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
    textAlign: 'center',
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
    height: Metrics.navBarButtonHeight,
    aspectRatio: 1
  },
  iosBackButtonAlignment: {
    backgroundColor: 'transparent',
    right: Metrics.baseMargin
  }
})
