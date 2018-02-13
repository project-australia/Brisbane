import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
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
    shippingMethod: 'STANDARD'
  }

  changeToExpediteShippingMethod = () => {
    this.setState({ shippingMethod: 'EXPEDITE' })
  }

  changeToStandardShippingMethod = () => {
    this.setState({ shippingMethod: 'STANDARD' })
  }

  goBack = () => this.props.navigation.goBack()

  checkoutWithPaypal = price => async () => {
    const { user, booksToBuy } = this.props
    try {
      await payWithPayPal(
        price,
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

  render () {
    const totalPrice = this.props.booksToBuy.total('BUY')
    const totalWeight = this.props.booksToBuy.reduce(
      (acc, item) => acc + item.book.dimensions.weight,
      0
    )

    return (
      <BuyBooksProcess
        books={this.props.booksToBuy}
        checkoutWithPayPal={this.checkoutWithPaypal(totalPrice)}
        expediteShippingPrice={totalWeight > 5 ? 9.99 : 6.99}
        isLoading={this.state.isLoading}
        navigateBack={this.goBack}
        selectExpediteShipping={() => this.changeToExpediteShippingMethod()}
        selectStandardShipping={() => this.changeToStandardShippingMethod()}
        shippingMethod={this.state.shippingMethod}
        totalPrice={totalPrice}
      />
    )
  }
}

const mapStateToProps = ({ authentication: { user }, shoppingBag }) => {
  const booksToBuy = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.BUY
  )
  return { booksToBuy, user }
}

const mapDispatchtoProps = dispatch => ({
  cleanShoppingBagByType: type => dispatch(removeAllFromShoppingBag(type))
})

export const BuyBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchtoProps
)(BuyBooksProcessContainer)
