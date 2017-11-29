import React from 'react'
import { AuthenticatedHOC } from '../containers/authenticatedHOC'

export const authenticated = Screen => screenProps => {
  return (
    <AuthenticatedHOC>
      <Screen {...screenProps} />
    </AuthenticatedHOC>
  )
}
