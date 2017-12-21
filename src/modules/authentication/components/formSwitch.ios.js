import React from 'react'
import { Switch } from 'react-native'

import { Colors } from '../../../constants'

export const FormSwitch = props => {
  return <Switch {...props} onTintColor={Colors.primary500} />
}
