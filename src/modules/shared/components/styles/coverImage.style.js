import { StyleSheet } from 'react-native'

import { Colors } from '../../../../constants'

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    aspectRatio: 16 / 9
  },
  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.lightOverlay
  },
  mainImage: {
    height: '100%'
  }
})
