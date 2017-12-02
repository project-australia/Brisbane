import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Home } from '../components/home'

class HomeContainer extends Component {
  render () {
    return (
      <Home
        userName={this.props.displayName}
      />
    )
  }
}

const mapStateToProps = ({authentication: {user}}) => ({displayName: user.displayName})

const mapDispatchToProps = () => ({})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
