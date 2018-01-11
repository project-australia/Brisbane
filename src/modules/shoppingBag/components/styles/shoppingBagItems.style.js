import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics, Values } from '../../../../constants'

export const styles = StyleSheet.create({
  itemsWrap: {
    marginBottom: Metrics.baseMargin
  },
  titleWrap: {
    marginHorizontal: Metrics.section
  },
  card: {
    backgroundColor: Colors.white,
    ...Values.elevation1,
    overflow: 'hidden',
    borderLeftWidth: Metrics.maxBorderWidth,
    marginBottom: 1
  },
  contentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.baseMargin
  },
  image: {
    aspectRatio: 3 / 4,
    backgroundColor: Colors.gray200,
    height: Metrics.bookMinHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsWrap: {
    flex: 1,
    marginLeft: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.normal,
    color: Colors.gray900
  },
  titleLight: {
    ...Fonts.style.normal,
    color: Colors.gray500
  },
  subtitle: {
    ...Fonts.style.footnote,
    color: Colors.gray500
  },
  rightContentWrap: {
    alignItems: 'flex-end',
    marginLeft: Metrics.baseMargin
  },
  whiteBackground: {
    backgroundColor: Colors.white
  },
  totalText: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    flex: 1
  },
  totalPriceText: {
    ...Fonts.style.bold
  },
  primaryColor: {
    color: Colors.primary500
  },
  secondaryColor: {
    color: Colors.secondary500
  }
})
