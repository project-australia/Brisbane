import {Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Metrics = {
  marginHorizontal: 12,
  marginVertical: 12,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  inputHeight: 40,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 24,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 56,
  buttonRadius: 4,
  borderWidth: 1,
  icons: {
    tiny: 12,
    small: 18,
    medium: 24,
    large: 42,
    xl: 60,
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
