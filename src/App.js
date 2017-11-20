import React from 'react'
import Router from './Router'

import Firebase from './config/Firebase'

export default async () => {
  await Firebase.initialize()
  return (<Router />)
}
