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
import { createOrder } from '../../../services/backend/orderService'
import { BuyCheckoutContainer } from './buyCheckoutContainer'

class CheckoutContainer extends Component {
  static propTypes = {
    cleanShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    total: PropTypes.number.isRequired,
    totalWeight: PropTypes.number.isRequired
  }

  state = {
    isLoading: false,
    shippingMethod: 'STANDARD',
    shippingPrice: 0
  }

  static navigationOptions = {
    header: null
  }

  generateOrder = async (user, books, shippingMethod, type) =>
    createOrder(type, shippingMethod, books, user.address, user.id)

  inPersonCheckout = async () => {
    const { screenType } = this.props.navigation.state.params
    const { user, books } = this.props
    this.setState({ isLoading: true })

    try {
      await this.generateOrder(user, books, 'IN_PERSON', screenType)
      this.onCheckoutSuccess(screenType)
    } catch (error) {
      alert('in person checkout failed')
      console.log('In Person checkout failed', JSON.stringify(error))
    } finally {
      this.setState({ isLoading: false })
    }
  }

  onCheckoutSuccess = () => {
    this.props.cleanShoppingBag(this.props.navigation.state.params.screenType)
    this.props.navigation.navigate('Home')
  }

  confirmInPersonCheckout = () => {
    Alert.alert(
      'In Person Payment',
      'Do you wanna proceed to in person checkout',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Sure thing',
          onPress: this.inPersonCheckout
        }
      ]
    )
  }

  get totalPrice() {
    return Number(this.props.total) + Number(this.state.shippingPrice)
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

  render() {
    const { screenType } = this.props.navigation.state.params

    if (screenType === 'BUY') {
      return (
        <BuyCheckoutContainer
          books={this.props.books}
          checkoutWithInPersonPayment={this.confirmInPersonCheckout}
          navigateBack={() => this.props.navigation.goBack()}
          selectExpediteShipping={this.changeToExpediteShippingMethod}
          selectStandardShipping={this.changeToStandardShippingMethod}
          totalPrice={this.totalPrice}
          onCheckoutSuccess={this.onCheckoutSuccess}
          isLoading={this.state.isLoading}
          shippingPrice={this.state.shippingPrice}
          shippingMethod={this.state.shippingMethod}
          navigation={this.props.navigation}
          user={this.props.user}
          generateOrder={this.generateOrder}
        />
      )
    }

    return null
  }
}

const mapStateToProps = state => {
  const books = buyingItems(state)
  return {
    books,
    user: state.authentication.user,
    total: shoppingBagBuyingTotal(state),
    totalWeight: calculateTotalWeight(books)
  }
}

const mapDispatchToProps = dispatch => ({
  cleanShoppingBag: type => dispatch(removeAllFromShoppingBag(type))
})

export const CheckoutScreen = connect(mapStateToProps, mapDispatchToProps)(
  CheckoutContainer
)
