import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, Values } from '../../../../constants'

export const styles = StyleSheet.create({
  text: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section,
    fontSize: 17
  },
  lastLine: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.section,
    fontSize: 17
  },
  input: {
    height: undefined,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.marginVertical,
    paddingVertical: 8,
    borderRadius: 4,
    ...Values.elevation4
  },
  wrapper: {
    paddingTop: Metrics.marginVertical
  }
})

// export const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: Colors.overlay,
//     justifyContent: 'center'
//   },
//   card: {
//     backgroundColor: Colors.white,
//     borderRadius: Metrics.cardRadius,
//     marginHorizontal: Metrics.section
//   },
//   title: {
//     ...Fonts.style.normal,
//     color: Colors.gray900,
//     textAlign: 'center',
//     marginHorizontal: Metrics.section,
//     marginTop: Metrics.section,
//     marginBottom: Metrics.doubleBaseMargin
//   },
//   input: {
//     marginHorizontal: Metrics.section
//   },
//   buttonGroup: {
//     marginVertical: Metrics.baseMargin,
//     flexDirection: 'row'
//   },
//   button: {
//     flex: 1
//   },
//   text: {
//     ...Fonts.style.description,
//     color: Colors.gray700,
//     marginBottom: Metrics.baseMargin,
//     marginHorizontal: Metrics.section,
//     textAlign: 'center'
//   }
// })
