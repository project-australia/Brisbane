import React, { Component } from 'react'
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

  render () {
    const totalPrice = this.props.booksToBuy.total('BUY')

    return (
      <BuyBooksProcess
        books={this.props.booksToBuy}
        checkoutWithPayPal={this.checkoutWithPaypal(totalPrice)}
        navigateBack={this.goBack}
        totalPrice={totalPrice}
      />
    )
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
    }
  }

  onPayPalOnSuccess = (books, user) => async paypalResponse => {
    const transactionId = paypalResponse.response.id
    const shoppingBagType = 'BUY'
    const order = await createOrder(shoppingBagType, 'SHIPPED', books, user, transactionId)
    console.log('order created, cleaning shopping bag and redirecting', order)

    this.props.cleanShoppingBagByType(shoppingBagType)
    this.props.navigation.navigate('Home')
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

export const BuyBooksProcessScreen = connect(mapStateToProps, mapDispatchtoProps)(
  BuyBooksProcessContainer
)
