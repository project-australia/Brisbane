import {Platform, TouchableNativeFeedback} from 'react-native'

const BackgroundBorderlessRipple = (Platform.OS === 'android')
  ? TouchableNativeFeedback.SelectableBackgroundBorderless()
  : null

export const Values = {
  BackgroundBorderlessRipple
}
