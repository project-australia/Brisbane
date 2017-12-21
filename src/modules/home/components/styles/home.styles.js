import { Platform, StyleSheet } from 'react-native'

import { Colors, Fonts, Metrics, Values } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  searchBarWrap: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.smallMargin,
    paddingRight: Metrics.smallMargin,
    borderRadius: Metrics.buttonRadius,
    ...Values.elevation1
  },
  searchInput: {
    flex: 1,
    paddingRight: Metrics.smallMargin,
    ...Fonts.style.description,
    ...Platform.select({
      android: {
        height: 40
      },
      ios: {
        paddingVertical: Metrics.baseMargin
      }
    })
  },
  iconWrap: {
    alignSelf: 'stretch',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleWrap: {
    marginHorizontal: Metrics.section
  },
  twoColumnMenuWrap: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.section / 2
  },
  menuColumn: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.section / 2
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius * 2,
    ...Values.elevation1,
    overflow: 'hidden'
  },
  square: {
    aspectRatio: 1
  },
  featuredIconWrap: {
    alignItems: 'flex-end'
  },
  secondaryInput: {
    ...Fonts.style.input,
    color: Colors.gray500,
    lineHeight: Metrics.textLineHeight
  },
  primaryText: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    lineHeight: Metrics.textLineHeight
  },

  listHeaderSpacing: {
    width: Metrics.section
  },
  listFooterSpacing: {
    width: Metrics.section / 2
  },
  bookCard: {
    flexDirection: 'row',
    marginBottom: Metrics.section / 2,
    marginRight: Metrics.section / 2,
    padding: Metrics.section / 2
  },
  bookImage: {
    aspectRatio: 3 / 4,
    backgroundColor: Colors.gray200,
    height: '100%'
  },
  bookInfoWrap: {
    marginLeft: Metrics.section / 2
  },
  bookButtonsGroup: {
    flexDirection: 'row',
    marginTop: Metrics.baseMargin
  },
  buyButton: {
    height: 36,
    minWidth: 72,
    marginRight: Metrics.baseMargin
  },
  rentButton: {
    height: 36,
    minWidth: 56
  }
})
