import {Platform, StyleSheet} from 'react-native'

import {Colors, Fonts, Metrics} from '../../../../constants'

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
    ...Platform.select({
      android: {
        elevation: 1
      },
      ios: {
        shadowColor: Colors.gray900,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 0,
        shadowOpacity: 0.12,
        overflow: 'visible'
      }
    })
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
  }
})
