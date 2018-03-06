import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NetworkMembers } from '../components/networkMembers'
import { getNetworking } from '../../../redux/actions/async/authenticationAsyncActions'

class NetworkMembersContainer extends Component {
  static navigationOptions = {
    title: 'Network Members',
    header: null
  }
  componentDidMount() {
    this.props.getNetworking(this.props.userId)
  }

  render() {
    return (
      <NetworkMembers
        network={this.props.network || []}
        navigateBack={this.goBack}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = ({ authentication: { user } }) => ({
  network: user.network,
  userId: user.id
})

const mapDispatchToProps = dispatch => ({
  getNetworking: id => dispatch(getNetworking(id))
})

export const NetworkMembersScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkMembersContainer)
