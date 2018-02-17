import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  calculateTotalWeight,
  shoppingBagSellingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import { createOrder } from '../../../services/backend/orderService'
import { payWithPayPal } from '../../../services/paypal'
import { SellBooksProcess } from '../components/sellBooksProcess'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'

class SellBooksProcessContainer extends Component {
  static propTypes = {
    cleanShoppingBagByType: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    booksToSell: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
  }

  static navigationOptions = {
    title: 'Sell Books',
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

  render() {
    console.log('pros sellBooksProcessScreen', this.props)
    return (
      <SellBooksProcess
        books={this.props.booksToSell}
        checkoutWithPayPal={this.checkoutWithPaypal(this.props.total)}
        expediteShippingPrice={this.props.totalWeight > 5 ? 9.99 : 6.99}
        isLoading={this.state.isLoading}
        navigateBack={this.goBack}
        selectExpediteShipping={() => this.changeToExpediteShippingMethod()}
        selectStandardShipping={() => this.changeToStandardShippingMethod()}
        shippingMethod={this.state.shippingMethod}
        totalPrice={this.props.total}
      />
    )
  }
}

const mapStateToProps = state => {
  const { authentication, shoppingBag } = state
  const { user } = authentication

  const booksToSell = shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.SELL
  )

  return {
    booksToSell,
    user,
    total: shoppingBagSellingTotal(state),
    totalWeight: calculateTotalWeight(booksToSell)
  }
}

const mapDispatchtoProps = dispatch => ({
  cleanShoppingBagByType: type => dispatch(removeAllFromShoppingBag(type))
})

export const SellBooksProcessScreen = connect(
  mapStateToProps,
  mapDispatchtoProps
)(SellBooksProcessContainer)
