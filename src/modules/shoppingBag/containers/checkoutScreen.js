import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  buyingItems,
  calculateTotalWeight,
  sellingItems,
  shoppingBagBuyingTotal,
  shoppingBagSellingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import { createOrder } from '../../../services/backend/orderService'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { BuyCheckoutContainer } from './buyCheckoutContainer'
import { SellCheckoutContainer } from './sellCheckoutContainer'

class CheckoutContainer extends Component {
  static propTypes = {
    buyingBooks: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    sellingBooks: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    cleanShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User),
    buyingTotal: PropTypes.number.isRequired,
    sellingTotal: PropTypes.number.isRequired
  }

  state = {
    isLoading: false,
    books: [],
    total: 0,
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
    const { books } = this.state
    const { user } = this.props
    this.setState({ isLoading: true })

    try {
      // FIXME: inside `generateOrder` should have case of creating selling order
      // actually this scenario is failing
      await this.generateOrder(user, books, 'IN_PERSON', screenType)
      alert('Instructions sent by email.')
      this.onCheckoutSuccess(screenType)
    } catch (error) {
      alert('in person checkout failed')
      console.log('In Person checkout failed')
      console.log(error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  onCheckoutSuccess = () => {
    if (this.props.navigation.state.params.screenType === 'BUY') {
      this.props.cleanShoppingBag('BUY')
      this.props.cleanShoppingBag('RENT')
    } else {
      this.props.cleanShoppingBag('SELL')
    }
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
    return Number(this.state.total) + Number(this.state.shippingPrice)
  }

  get standardShippingPrice() {
    return calculateTotalWeight(this.state.books) > 5 ? 9.99 : 6.99
  }

  changeToExpediteShippingMethod = () => {
    this.setState({
      shippingMethod: 'EXPEDITE',
      shippingPrice: this.standardShippingPrice
    })
  }

  changeToStandardShippingMethod = () => {
    this.setState({ shippingMethod: 'STANDARD', shippingPrice: 0 })
  }

  navigateBack = () => this.props.navigation.goBack()

  componentDidMount() {
    const { screenType } = this.props.navigation.state.params

    if (screenType === 'BUY') {
      this.setState({
        books: this.props.buyingBooks,
        total: this.props.buyingTotal
      })
    }

    if (screenType === 'SELL') {
      this.setState({
        books: this.props.sellingBooks,
        total: this.props.sellingTotal
      })
    }
  }

  render() {
    const { screenType } = this.props.navigation.state.params

    if (screenType === 'BUY') {
      return (
        <BuyCheckoutContainer
          books={this.state.books}
          checkoutWithInPersonPayment={this.confirmInPersonCheckout}
          navigateBack={this.navigateBack}
          selectExpediteShipping={this.changeToExpediteShippingMethod}
          selectStandardShipping={this.changeToStandardShippingMethod}
          totalPrice={this.totalPrice}
          onCheckoutSuccess={this.onCheckoutSuccess}
          isLoading={this.state.isLoading}
          shippingPrice={this.state.shippingPrice}
          shippingMethod={this.state.shippingMethod}
          navigation={this.props.navigation}
          expediteShippingPrice={this.standardShippingPrice}
          user={this.props.user}
          generateOrder={this.generateOrder}
        />
      )
    }

    if (screenType === 'SELL') {
      return (
        <SellCheckoutContainer
          books={this.state.books}
          checkoutWithInPersonPayment={this.confirmInPersonCheckout}
          navigateBack={this.navigateBack}
          totalPrice={this.totalPrice}
          onCheckoutSuccess={this.onCheckoutSuccess}
          isLoading={this.state.isLoading}
          user={this.props.user}
          generateOrder={this.generateOrder}
        />
      )
    }

    return null
  }
}

const mapStateToProps = state => {
  return {
    buyingBooks: buyingItems(state),
    sellingBooks: sellingItems(state),
    user: state.authentication.user,
    buyingTotal: shoppingBagBuyingTotal(state),
    sellingTotal: shoppingBagSellingTotal(state)
  }
}

const mapDispatchToProps = dispatch => ({
  cleanShoppingBag: type => dispatch(removeAllFromShoppingBag(type))
})

export const CheckoutScreen = connect(mapStateToProps, mapDispatchToProps)(
  CheckoutContainer
)