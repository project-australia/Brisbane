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
  updateOrder
} from '../../../services/backend/orderService'
import { payWithPayPal } from '../../../services/paypal'
import { BuyBooksProcess } from '../components/buyBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { confirmInPersonCheckout, generateOrder } from './shared/checkout'

class BuyBooksProcessContainer extends Component {
  static propTypes = {
    cleanShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
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
    const { shippingMethod } = this.state
    const { user, books } = this.props
    return generateOrder(user, books, shippingMethod, 'BUY')
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
    this.props.cleanShoppingBag()
    this.props.navigation.navigate('Home')
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
        books={this.props.books}
        checkoutWithPayPal={this.payPalCheckout}
        checkoutWithInPersonPayment={() => confirmInPersonCheckout(this, 'BUY')}
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
  const books = buyingItems(state)

  return {
    user,
    books,
    total: shoppingBagBuyingTotal(state),
    totalWeight: calculateTotalWeight(books)
  }
}

const mapDispatchToProps = dispatch => ({
  cleanShoppingBag: () => dispatch(removeAllFromShoppingBag('BUY'))
})

export const BuyBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyBooksProcessContainer)
