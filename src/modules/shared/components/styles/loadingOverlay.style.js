import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.overlay
  },
  spinner: {
    width: 200,
    height: 200
  }
})
