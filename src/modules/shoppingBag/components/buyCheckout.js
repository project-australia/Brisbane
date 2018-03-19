import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

import { OrderSummaryList } from './orderSummaryList'
import { Navbar } from '../../shared/components/navbar'
import { MenuTitle } from '../../shared/components/menuTitle'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { FormButton, FormOutlineButton, SimpleButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'
import { Metrics } from '../../../constants'

const SelectedButton = FormButton
const NotSelectedButton = FormOutlineButton

export class BuyCheckout extends React.Component {
  static navigationOptions = {
    title: 'Buy Books',
    header: null
  }

  static propTypes = {
    shippingPrice: PropTypes.number.isRequired,
    checkoutWithPayPal: PropTypes.func.isRequired,
    checkoutWithInPersonPayment: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired,
    navigateBack: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    expediteShippingPrice: PropTypes.number.isRequired,
    selectExpediteShipping: PropTypes.func.isRequired,
    selectStandardShipping: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    shippingMethod: PropTypes.oneOf(['STANDARD', 'EXPEDITE', 'IN_PERSON'])
      .isRequired
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

  // TODO: Isso parece ser um component a parte
  renderShippingAddress = () => {
    return (
      <View style={styles.wrappingCard}>

        <View style={styles.wrappAddressItem}>
          <Text style={styles.addressItemLeft}>
            Street:
          </Text>
          <Text style={styles.addressItemRight}>475 LENFANT PLZ SW RM 10022</Text>
        </View>

        <View style={styles.wrappAddressItem}>
          <Text style={styles.addressItemLeft}>
            City:
          </Text>
          <Text style={styles.addressItemRight}>Washington</Text>
        </View>

        <View style={styles.wrappAddressItem}>
          <Text style={styles.addressItemLeft}>
            State:
          </Text>
          <Text style={styles.addressItemRight}>DC</Text>
        </View>

        <View style={styles.wrappAddressItem}>
          <Text style={styles.addressItemLeft}>
            Zipcode:
          </Text>
          <Text style={styles.addressItemRight}>20260-0010</Text>
        </View>

        <View style={styles.wrappAddressItem}>
          <Text style={styles.addressItemLeft}>
            Phone:
          </Text>
          <Text style={styles.addressItemRight}>(541) 754-3010</Text>
        </View>

        <View style={styles.addressButton}>

          <SimpleButton
            secondary
            title={'Change Address'}
            onPress={() => console.warn('change address')}
            style={{ marginRight: Metrics.section, marginVertical: Metrics.baseMargin }}
          />
        </View>
      </View>
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
            shippingPrice={this.props.shippingPrice}
            total={this.props.totalPrice}
          />

          <MenuTitle title={'Shipping Address'} style={styles.titleWrap} />
          {this.renderShippingAddress()}

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
              Choose a method to finalize your selling
            </Text>
            <FormButton
              title={'Pay localy'}
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
