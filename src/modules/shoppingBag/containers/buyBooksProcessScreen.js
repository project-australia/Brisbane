import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  calculateTotalWeight,
  shoppingBagBuyingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import { createOrder } from '../../../services/backend/orderService'
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
    this.setState({ shippingMethod: 'EXPEDITE', shippingPrice: this.props.totalWeight > 5 ? 9.99 : 6.99 })
  }

  changeToStandardShippingMethod = () => {
    this.setState({ shippingMethod: 'STANDARD', shippingPrice: 0 })
  }

  getTotalPrice = () => {
    return Number(this.props.total) + Number(this.state.shippingPrice)
  }

  goBack = () => this.props.navigation.goBack()

  checkoutWithPaypal = price => async () => {
    const { user, booksToBuy } = this.props
    const totalPrice = this.getTotalPrice().toString()
    try {
      await payWithPayPal(
        totalPrice,
        'Buying books',
        this.onPayPalOnSuccess(booksToBuy, user)
      )
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
      this.setState({ isLoading: false })
    }
  }

  onPayPalOnSuccess = (books, user) => async paypalResponse => {
    const transactionId = paypalResponse.response.id
    const shoppingBagType = 'BUY'
    this.setState({ isLoading: true })
    const order = await createOrder(
      shoppingBagType,
      this.state.shippingMethod,
      books,
      user,
      transactionId
    )
    this.setState({ isLoading: false })
    console.log('order created, cleaning shopping bag and redirecting', order)

    Alert.alert(
      'Payment Confirmed',
      'Thanks for buying',
      [
        {
          text: 'OK',
          onPress: () => this.onCheckoutSuccess()
        }
      ],
      { onDismiss: () => this.onCheckoutSuccess(), cancelable: false }
    )
  }

  onCheckoutSuccess = () => {
    this.props.cleanShoppingBagByType('BUY')
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <BuyBooksProcess
        books={this.props.booksToBuy}
        checkoutWithPayPal={this.checkoutWithPaypal(this.props.total)}
        expediteShippingPrice={this.props.totalWeight > 5 ? 9.99 : 6.99}
        isLoading={this.state.isLoading}
        navigateBack={this.goBack}
        selectExpediteShipping={() => this.changeToExpediteShippingMethod()}
        selectStandardShipping={() => this.changeToStandardShippingMethod()}
        shippingMethod={this.state.shippingMethod}
        totalPrice={this.getTotalPrice()}
      />
    )
  }
}

const mapStateToProps = state => {
  const { authentication, shoppingBag } = state
  const { user } = authentication

  const booksToBuy = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.BUY
  )

  return {
    booksToBuy,
    user,
    total: shoppingBagBuyingTotal(state),
    totalWeight: calculateTotalWeight(booksToBuy)
  }
}

const mapDispatchtoProps = dispatch => ({
  cleanShoppingBagByType: type => dispatch(removeAllFromShoppingBag(type))
})

export const BuyBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchtoProps
)(BuyBooksProcessContainer)
