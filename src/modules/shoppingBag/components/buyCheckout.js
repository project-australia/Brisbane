import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { User } from '../../../domain/User'
import { CheckoutAddress } from './checkoutAddress'

import { OrderSummaryList } from './orderSummaryList'
import { Navbar } from '../../shared/components/navbar'
import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { FormButton, FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

const SelectedButton = FormButton
const NotSelectedButton = FormOutlineButton

export class BuyCheckout extends React.Component {
  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  static propTypes = {
    prices: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    checkoutWithPayPal: PropTypes.func.isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    navigateBack: PropTypes.func.isRequired,
    expediteShippingPrice: PropTypes.number.isRequired,
    selectExpediteShipping: PropTypes.func.isRequired,
    selectStandardShipping: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    shippingMethod: PropTypes.oneOf(['STANDARD', 'EXPEDITE', 'IN_PERSON'])
      .isRequired
  }

  state = {
    isModalVisible: false
  }

  renderStandardShippingButton = () => {
    const Button =
      this.props.shippingMethod === 'STANDARD'
        ? SelectedButton
        : NotSelectedButton
    return (
      <Button
        title={'Standard Shipping - FREE'}
        onPress={this.props.selectStandardShipping}
      />
    )
  }

  renderExpediteShippingButton = () => {
    const Button =
      this.props.shippingMethod === 'EXPEDITE'
        ? SelectedButton
        : NotSelectedButton
    return (
      <Button
        title={`Expedite Shipping - $${this.props.expediteShippingPrice}`}
        onPress={this.props.selectExpediteShipping}
      />
    )
  }

  render() {
    return (
      <LoadingOverlay style={styles.container} isLoading={this.props.isLoading}>
        <Navbar
          title={`Buying ${this.props.books.length} Books`}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <OrderSummaryList
            orders={this.props.books}
            prices={this.props.prices}
          />
          <CheckoutAddress address={this.props.user.address} />
          <MenuTitle title={'Shipping Method'} style={styles.titleWrap} />
          <View style={styles.wrappingCard}>
            <Text
              style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}
            >
              Choose shipping method
            </Text>
            {this.renderStandardShippingButton()}
            {/* TODO: Isso deveria ser uma margem? */}
            <View style={{ height: 15 }} />
            {this.renderExpediteShippingButton()}
          </View>
          <MenuTitle title={'Checkout'} style={styles.titleWrap} />
          <View style={styles.wrappingCard}>
            <Text
              style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}
            >
              Choose a method to finalize your order
            </Text>
            <FormButton
              title={'Pay locally'}
              onPress={this.props.checkoutWithInPersonPayment}
            />
            <View style={{ height: 15 }} />
            <FormButton
              title={'Checkout with Paypal'}
              onPress={this.props.checkoutWithPayPal}
            />
          </View>
        </ScrollView>
      </LoadingOverlay>
    )
  }
}
