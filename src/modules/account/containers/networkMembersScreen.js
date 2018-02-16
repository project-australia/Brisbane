import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NetworkMembers } from '../components/networkMembers'

class NetworkMembersContainer extends Component {
  static navigationOptions = {
    title: 'Network members',
    header: null
  }

  state = {
    network: ['Arnold Schwazenegger', 'Adam Smith', 'Hebert Porto']
  }

  render() {
    return (
      <NetworkMembers network={this.state.network} navigateBack={this.goBack} />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = state => ({ items: state.books })

export const NetworkMembersScreen = connect(mapStateToProps)(
  NetworkMembersContainer
)
