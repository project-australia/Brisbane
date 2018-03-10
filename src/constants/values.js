import { Platform, TouchableNativeFeedback } from 'react-native'

import { Colors } from './colors'

const BackgroundBorderlessRipple =
  Platform.OS === 'android'
    ? TouchableNativeFeedback.SelectableBackgroundBorderless()
    : null

const elevation1 = {
  ...Platform.select({
    android: {
      elevation: 1
    },
    ios: {
      shadowColor: Colors.gray900,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 0,
      shadowOpacity: 0.12,
      overflow: 'visible'
    }
  })
}

const elevation4 = {
  ...Platform.select({
    android: {
      elevation: 4
    },
    ios: {
      shadowColor: Colors.gray900,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 3,
      shadowOpacity: 0.18,
      overflow: 'visible'
    }
  })
}

const elevation16 = {
  ...Platform.select({
    android: {
      elevation: 16
    },
    ios: {
      shadowColor: Colors.gray900,
      shadowOffset: { width: 0, height: 15 },
      shadowRadius: 12,
      shadowOpacity: 0.24,
      overflow: 'visible'
    }
  })
}

export const Values = {
  BackgroundBorderlessRipple,
  elevation1,
  elevation4,
  elevation16
}
