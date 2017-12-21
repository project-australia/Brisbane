import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.screen,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.marginVertical * 3
  },
  title: {
    ...Fonts.style.title,
    color: Colors.gray900
  },
  image: {
    resizeMode: 'contain'
  },
  centralized: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  content: {
    justifyContent: 'space-between'
  },
  itemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2,
    marginBottom: Metrics.marginVertical
  },
  loginButton: {
    flex: 1,
    marginVertical: Metrics.marginVertical
  }
})
