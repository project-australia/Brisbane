import React from 'react'
import { AuthenticatedHOC } from '../containers/authenticatedHOC'

function DecorateScreen (Screen) {
  return props => {
    return (
      <AuthenticatedHOC>
        <Screen {...props} />
      </AuthenticatedHOC>
    )
  }
}

export function authenticated (screen) {
  return DecorateScreen(screen)
}
