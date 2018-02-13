import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

import { OrderSummaryList } from './orderSummaryList'
import { Navbar } from '../../shared/components/navbar'
import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { FormButton, FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

const SelectedButton = FormButton
const NotSelectedButton = FormOutlineButton

export class BuyBooksProcess extends React.Component {
  state = {
    shippingMethod: 'standard'
  }

  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  static propTypes = {
    checkoutWithPayPal: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    navigateBack: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  changeToExpediteShippingMethod = () => {
    this.setState({ shippingMethod: 'expedite' })
  }

  changeToStandardShippingMethod = () => {
    this.setState({ shippingMethod: 'standard' })
  }

  renderStandardShippingButton = () => {
    const Button = this.state.shippingMethod === 'standard' ? SelectedButton : NotSelectedButton
    return (
      <Button
        secondary
        title={'Standard Shipping'}
        onPress={() => this.changeToStandardShippingMethod()}
      />
    )
  }

  renderExpediteShippingButton = () => {
    const Button = this.state.shippingMethod === 'expedite' ? SelectedButton : NotSelectedButton
    return (
      <Button
        secondary
        title={'Expedite Shipping'}
        onPress={() => this.changeToExpediteShippingMethod()}
      />
    )
  }

  render () {
    return (
      <LoadingOverlay style={styles.container} isLoading={this.props.isLoading}>
        <Navbar
          title={`Buying ${this.props.books.length} Books`}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <OrderSummaryList orders={this.props.books} total={this.props.totalPrice} />
          <MenuTitle title={'Checkout'} style={styles.titleWrap} />
          <View style={styles.wrappingCard}>
            <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
              Choose a method to finalize your selling
            </Text>
            <FormOutlineButton
              secondary
              title={'Pay localy'}
              onPress={() => alert('Create Order With Payment in Person')}
            />
            <View style={{ height: 15 }} />
            <FormOutlineButton
              secondary
              title={'Checkout with Paypal'}
              onPress={this.props.checkoutWithPayPal}
            />
          </View>
          <MenuTitle title={'Shipping Method'} style={styles.titleWrap} />
          <View style={styles.wrappingCard}>
            <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
              Choose shipping method
            </Text>
            {this.renderStandardShippingButton()}
            {/* TODO: Isso deveria ser uma margem? */}
            <View style={{ height: 15 }} />
            {this.renderExpediteShippingButton()}
          </View>
        </ScrollView>
      </LoadingOverlay>
    )
  }
}
