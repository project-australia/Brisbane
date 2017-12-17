import {Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window')
const statusBarHeight = (Platform.OS === 'ios') ? 20 : 24
const navBarHeight = (Platform.OS === 'ios') ? 86 : 80

export const Metrics = {
  marginHorizontal: 12,
  marginVertical: 12,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  inputHeight: 44,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight,
  navBarHeight,
  navBarButtonHeight: navBarHeight - statusBarHeight,
  backButtonInset: (Platform.OS === 'ios') ? 5 : 8,
  buttonRadius: 4,
  borderWidth: 1,
  icons: {
    tiny: 12,
    small: 18,
    medium: 24,
    large: 32,
    xl: 42,
    xxl: 72,
    xxxl: 96
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300
  }
}
