import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../../../constants'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.cardRadius,
    marginHorizontal: Metrics.section,
    marginTop: 40,
    marginBottom: 25
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
  }
})
