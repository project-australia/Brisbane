import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '../../../../constants'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.background
  },
  image: {
    resizeMode: 'contain'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
