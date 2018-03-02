import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../../constants'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.cardRadius,
    marginHorizontal: Metrics.section
  },
  title: {
    ...Fonts.style.normal,
    color: Colors.gray900,
    textAlign: 'center',
    marginHorizontal: Metrics.section,
    marginTop: Metrics.section,
    marginBottom: Metrics.doubleBaseMargin
  },
  input: {
    marginHorizontal: Metrics.section
  },
  buttonGroup: {
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row'
  },
  button: {
    flex: 1
  },
  text: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section,
    textAlign: 'center'
  }
})
