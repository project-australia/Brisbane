import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManageAccount } from '../components/manageAccount'

class ManageAccountContainer extends Component {
  render () {
    return (
      <ManageAccount />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export const ManageAccountScreen = connect(mapStateToProps, mapDispatchToProps)(ManageAccountContainer)
