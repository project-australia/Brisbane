import React, { Component } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from '../../../domain/User'
import { removeAllFromShoppingBag } from '../../../redux/actions'
import {
  updateFeaturedBooks,
  updateRecentlyAddedBooks
} from '../../../redux/actions/sync/bookActions'
import {
  buyingItems,
  calculateTotalWeight,
  sellingItems,
  shoppingBagBuyingTotal,
  shoppingBagSellingTotal
} from '../../../redux/selectors/shoppingBagSelectors'
import {
  featuredBooks,
  recentlyAddedBooks
} from '../../../services/backend/bookService'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { createOrder } from '../../../services/backend/orderService'
import { SellCheckoutContainer } from './sellCheckoutContainer'
import { BuyCheckoutContainer } from './buyCheckoutContainer'

const errorMessage = 'You have to fill your address first'

class CheckoutContainer extends Component {
  static propTypes = {
    buyingBooks: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    sellingBooks: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    cleanShoppingBag: PropTypes.func.isRequired,
    refreshRecentlyBooks: PropTypes.func.isRequired,
    refreshFeaturedBooks: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
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

  generateOrder = async (user, books, shippingMethod, type) => {
    if (isInvalidAddress(user.address)) {
      alert(errorMessage)
      throw new Error(errorMessage)
    }

    try {
      this.setState({ isLoading: true })
      const { total } = this.calculatePrices()
      await createOrder(
        type,
        shippingMethod,
        books,
        user.address,
        user.id,
        total
      )
      await this.updateHomeBooks()
    } catch (error) {
      console.warn('Error during generate an order', error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  updateHomeBooks = async () => {
    const [recently, featured] = await Promise.all([
      recentlyAddedBooks(),
      featuredBooks()
    ])

    this.props.refreshRecentlyBooks(recently)
    this.props.refreshFeaturedBooks(featured)
  }

  inPersonCheckout = async () => {
    const { screenType } = this.props.navigation.state.params
    const { books } = this.state
    const { user } = this.props
    this.setState({ isLoading: true })

    try {
      await this.generateOrder(user, books, 'IN_PERSON', screenType)
      this.onCheckoutSuccess('Instructions sent by email.')
    } catch (error) {
      if (error.message === errorMessage) {
        return
      }

      const defaultMessage = 'In Person Checkout failed'
      alert(error.message || defaultMessage)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  confirmInPersonCheckout = () => {
    Alert.alert(
      'In Person Checkout',
      'Do you want to proceed to in person checkout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: this.inPersonCheckout
        }
      ]
    )
  }

  onCheckoutSuccess = alertMessage => {
    if (this.props.navigation.state.params.screenType === 'BUY') {
      this.props.cleanShoppingBag('BUY')
      this.props.cleanShoppingBag('RENT')
    } else {
      this.props.cleanShoppingBag('SELL')
    }
    this.props.navigation.navigate('Home')

    alert(alertMessage)
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

  userClubBonus = () => {
    const { screenType } = this.props.navigation.state.params
    const { club } = this.props.user

    if (club === 'NONE') {
      return 0
    } else if (club === 'TWENTY' && screenType === 'SELL') {
      return 0.2
    }

    return 0
  }

  calculatePrices = () => {
    const shoppingBagPriceSum = this.state.total
    const shipping = this.state.shippingPrice
    const bonus = Number(
      (shoppingBagPriceSum * this.userClubBonus()).toFixed(2)
    )
    const subTotal = Number(shoppingBagPriceSum.toFixed(2))
    const total = Number(shipping + subTotal + bonus).toFixed(2)

    return {
      shipping,
      bonus,
      subTotal,
      total: Number(total)
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
          prices={this.calculatePrices()}
          onCheckoutSuccess={this.onCheckoutSuccess}
          isLoading={this.state.isLoading}
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
          prices={this.calculatePrices()}
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

const isInvalidAddress = (address = {}) => {
  return !address.state || !address.city || !address.state || !address.zipCode
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
  cleanShoppingBag: type => dispatch(removeAllFromShoppingBag(type)),
  refreshRecentlyBooks: books => dispatch(updateRecentlyAddedBooks(books)),
  refreshFeaturedBooks: books => dispatch(updateFeaturedBooks(books))
})

export const CheckoutScreen = connect(mapStateToProps, mapDispatchToProps)(
  CheckoutContainer
)
