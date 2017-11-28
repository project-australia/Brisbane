import React from 'react'
import { AuthenticatedHOC } from './AuthenticatedHOC'

export function AuthenticatedDecorator (Screen) {
  return props => {
    return (
      <AuthenticatedHOC>
        <Screen {...props} />
      </AuthenticatedHOC>
    )
  }
}

export function authenticated (screen) {
  return AuthenticatedDecorator(screen)
}
