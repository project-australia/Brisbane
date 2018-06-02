import { StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics, Values } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  cardWithoutBorder: {
    backgroundColor: Colors.white,
    ...Values.elevation1,
    overflow: 'hidden',
    marginBottom: 1
  },
  wrappingCard: {
    backgroundColor: Colors.white,
    paddingVertical: Metrics.baseMargin,
    paddingLeft: Metrics.section - Metrics.maxBorderWidth,
    paddingRight: Metrics.section,
    borderBottomWidth: Metrics.borderWidth,
    borderColor: Colors.divider
  },
  contentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.baseMargin
  },
  noRightPadding: {
    paddingHorizontal: 0,
    paddingLeft: Metrics.section
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center'
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
    ...Fonts.style.heavyDescription,
    color: Colors.gray700
  },
  titleLight: {
    ...Fonts.style.normal,
    color: Colors.gray500
  },
  subtitle: {
    ...Fonts.style.footnote,
    color: Colors.gray500
  },
  subtitleRight: {
    ...Fonts.style.footnote,
    color: Colors.gray500,
    textAlign: 'right'
  },
  rightContentWrap: {
    paddingLeft: Metrics.baseMargin
  },
  rightContentButton: {
    paddingHorizontal: Metrics.marginHorizontal
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
  },
  description: {
    ...Fonts.style.description,
    color: Colors.gray700
  },
  footnote: {
    ...Fonts.style.footnote,
    color: Colors.gray500
  },
  inlineButton: {
    paddingHorizontal: Metrics.marginHorizontal,
    marginLeft: Metrics.marginHorizontal
  },
  wrappAddressItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  addressItemLeft: {
    ...Fonts.style.footnote,
    color: Colors.gray500,
    flex: 0.3
  },
  addressItemRight: {
    ...Fonts.style.footnote,
    color: Colors.gray700,
    flex: 0.7
  },
  addressButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  addressButton: {
    marginRight: Metrics.section,
    marginVertical: Metrics.baseMargin
  }
})
