import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../../../constants'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background
  },
  image: {
    resizeMode: 'contain'
  },
  title: {
    ...Fonts.style.h4
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centralized: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    justifyContent: 'space-between'
  },
  loginButton: {
    marginVertical: Metrics.marginVertical
  }
})
