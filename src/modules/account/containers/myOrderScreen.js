import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MyOrders } from '../components/myorders'
import { getOrders } from '../../../redux/actions/async/authenticationAsyncActions'

class MyOrderContainer extends Component {
  static navigationOptions = {
    title: 'My Orders',
    header: null
  }

  componentDidMount() {
    this.props.getOrders(this.props.userId)
  }

  render() {
    return (
      <MyOrders orders={this.props.orders || []} navigateBack={this.goBack} />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = ({ authentication: { user } }) => ({
  orders: user.orders,
  userId: user.id
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(getOrders(id))
})

export const MyOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(
  MyOrderContainer)
