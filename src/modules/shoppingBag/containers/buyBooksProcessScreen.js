import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  buyingItems,
  calculateTotalWeight,
  shoppingBagBuyingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import {
  createOrder,
  updateOrder
} from '../../../services/backend/orderService'
import { payWithPayPal } from '../../../services/paypal'
import { BuyBooksProcess } from '../components/buyBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class BuyBooksProcessContainer extends Component {
  static propTypes = {
    cleanShoppingBagByType: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    booksToBuy: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
  }

  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  state = {
    isLoading: false,
    shippingMethod: 'STANDARD',
    shippingPrice: 0
  }

  changeToExpediteShippingMethod = () => {
    this.setState({
      shippingMethod: 'EXPEDITE',
      shippingPrice: this.props.totalWeight > 5 ? 9.99 : 6.99
    })
  }

  changeToStandardShippingMethod = () => {
    this.setState({ shippingMethod: 'STANDARD', shippingPrice: 0 })
  }

  getTotalPrice = () =>
    Number(this.props.total) + Number(this.state.shippingPrice)

  generateBuyOrder = async () => {
    const { user, booksToBuy } = this.props
    return createOrder(
      'BUY',
      this.state.shippingMethod,
      booksToBuy,
      user.address,
      user.id
    )
  }

  successAlert = () => {
    Alert.alert(
      'Payment Confirmed',
      'Thanks for buying',
      [
        {
          text: 'OK',
          onPress: () => this.onCheckoutSuccess()
        }
      ],
      { onDismiss: () => this.onCheckoutSuccess() }
    )
  }

  confirmInPersonCheckout = () => {
    Alert.alert(
      'In Person Payment',
      'Do you wanna proceed to in person checkout',
      [
        {
          text: 'Sure thing',
          onPress: () => this.inPersonCheckout()
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    )
  }

  onPayPalOnSuccess = order => async paypalResponse => {
    await updateOrder(
      this.props.user.id,
      order.id,
      paypalResponse.response.id,
      'PAYMENT_CONFIRMED'
    )
    this.successAlert()
  }

  onCheckoutSuccess = () => {
    this.props.cleanShoppingBagByType('SELL')
    this.props.navigation.navigate('Home')
  }

  inPersonCheckout = async () => {
    this.setState({ isLoading: true })

    try {
      await this.generateBuyOrder()
      alert('Order Generated')
      this.onCheckoutSuccess()
    } catch (error) {
      console.log('In Person checkout failed', JSON.stringify(error))
    } finally {
      this.setState({ isLoading: false })
    }
  }

  payPalCheckout = async () => {
    this.setState({ isLoading: true })

    try {
      const order = await this.generateBuyOrder()
      await payWithPayPal(
        this.getTotalPrice(),
        'Buying books',
        this.onPayPalOnSuccess(order)
      )
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <BuyBooksProcess
        books={this.props.booksToBuy}
        checkoutWithPayPal={this.payPalCheckout}
        checkoutWithInPersonPayment={this.confirmInPersonCheckout}
        expediteShippingPrice={this.props.totalWeight > 5 ? 9.99 : 6.99}
        isLoading={this.state.isLoading}
        navigateBack={() => this.props.navigation.goBack()}
        selectExpediteShipping={() => this.changeToExpediteShippingMethod()}
        selectStandardShipping={() => this.changeToStandardShippingMethod()}
        shippingMethod={this.state.shippingMethod}
        totalPrice={this.getTotalPrice()}
      />
    )
  }
}

const mapStateToProps = state => {
  const { authentication } = state
  const { user } = authentication
  const booksToBuy = buyingItems(state)

  return {
    user,
    booksToBuy: buyingItems(state),
    total: shoppingBagBuyingTotal(state),
    totalWeight: calculateTotalWeight(booksToBuy)
  }
}

const mapDispatchToProps = dispatch => ({
  cleanShoppingBagByType: type => dispatch(removeAllFromShoppingBag(type))
})

export const BuyBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyBooksProcessContainer)
