import React from 'react'
import {connect} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'

import { StackNavigator } from './navigator'

class Stack extends React.Component {
  render () {
    const {dispatch, nav} = this.props
    const navigation = addNavigationHelpers({state: nav, dispatch})

    return (<StackNavigator navigation={navigation} />)
  }
}

export const Navigator = connect(state => ({nav: state.nav}))(Stack)
