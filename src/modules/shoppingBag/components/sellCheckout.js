import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native'
import { User } from '../../../domain/User'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

import { Navbar } from '../../shared/components/navbar'
import { ShoppingBagItemPropType } from '../propTypes/ShoppingBagItem'
import { CheckoutAddress } from './checkoutAddress'
import { OrderSummaryList } from './orderSummaryList'
import { MenuTitle } from '../../shared/components/menuTitle'
import { FormButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'
import { ModalTermsConditions } from '../../shared/components/modals/modalTermsConditions'

export class SellCheckout extends React.Component {
  state = {
    isModalVisible: false,
    isTermsConditionsModalOn: false,
    postingChoose: ''
  }
  showTermsConditionsModal = async () => this.setState({ isTermsConditionsModalOn: true })
  hideTermsConditionsModal = async () => this.setState({ isTermsConditionsModalOn: false })
  chooseInPerson = () => {
    this.setState({postingChoose: 'person'})
    Alert.alert(
      'Terms and Conditions',
      'By confirming you agree to our Terms and Conditions, do you confirm?',
      [
        { text: 'Check terms', onPress: this.showTermsConditionsModal },
        { text: 'Decline', onPress: () => {}, style: 'cancel' },
        { text: 'Agree', onPress: this.props.inPersonCheckout }
      ],
      { cancelable: true }
    )
  }

  chooseByShipping = () => {
    this.setState({postingChoose: 'shipping'})
    Alert.alert(
      'Terms and Conditions',
      'By confirming you agree to our Terms and Conditions, do you confirm?',
      [
        { text: 'Check terms', onPress: this.showTermsConditionsModal },
        { text: 'Decline', onPress: () => {}, style: 'cancel' },
        { text: 'Agree', onPress: this.props.inGetLabelCheckout }
      ],
      { cancelable: true }
    )
  }

  agreedWithTerms = async () => {
    await this.setState({ isTermsConditionsModalOn: false })
    if (this.state.postingChoose === 'person') {
      setTimeout(() => {
        this.props.inPersonCheckout()
      }, 1000)
    }
    if (this.state.postingChoose === 'shipping') {
      setTimeout(() => {
        this.props.inGetLabelCheckout()
      }, 1000)
    }
  }
  render() {
    return (
      <LoadingOverlay style={styles.container} isLoading={this.props.isLoading}>
        <Navbar
          title={`Selling ${this.props.books.length} Books`}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <OrderSummaryList orders={this.props.books} prices={this.props.prices} selling />
          <CheckoutAddress address={this.props.user.address} />
          <MenuTitle title={'Checkout'} style={styles.titleWrap} />
          <View style={styles.wrappingCard}>
            <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
              Choose a method to finalize your transaction
            </Text>
            <FormButton
              secondary
              title={'Local Pick Up near Provo and Orem'}
              onPress={this.chooseInPerson}
            />
            <View style={{ height: 15 }} />
            <FormButton
              secondary
              title={'Receive a Prepaid Shipping Labe'}
              onPress={this.chooseByShipping}
            />
          </View>
          <ModalTermsConditions
            isVisible={this.state.isTermsConditionsModalOn}
            onCancel={this.hideTermsConditionsModal}
            buttonTitle={'Agree with the terms'}
            onPressButton={this.agreedWithTerms}
          />
        </ScrollView>
      </LoadingOverlay>
    )
  }
}

SellCheckout.propTypes = {
  prices: PropTypes.object.isRequired,
  user: PropTypes.instanceOf(User),
  inPersonCheckout: PropTypes.func.isRequired,
  inGetLabelCheckout: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(ShoppingBagItemPropType).isRequired
}

SellCheckout.defaultProps = {
  books: []
}
