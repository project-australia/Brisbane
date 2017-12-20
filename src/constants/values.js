import {Platform, TouchableNativeFeedback} from 'react-native'

import {Colors} from './colors'

const BackgroundBorderlessRipple = (Platform.OS === 'android')
  ? TouchableNativeFeedback.SelectableBackgroundBorderless()
  : null

const elevation1 = {
  ...Platform.select({
    android: {
      elevation: 1
    },
    ios: {
      shadowColor: Colors.gray900,
      shadowOffset: {width: 0, height: 1},
      shadowRadius: 0,
      shadowOpacity: 0.12,
      overflow: 'visible'
    }
  })
}

export const Values = {
  BackgroundBorderlessRipple,
  elevation1
}
