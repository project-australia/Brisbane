import React from 'react'
import Router from './Router'

import Firebase from './config/Firebase'

export default () => {
  Firebase.initialize()
  return (<Router/>)
}
