import React from 'react'
import { AuthenticatedHOC } from '../containers/authenticatedHOC'

export const authenticated = Screen => screenProps => (
  <AuthenticatedHOC navigation={screenProps.navigation}>
    <Screen {...screenProps} />
  </AuthenticatedHOC>
)
