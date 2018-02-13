import React from 'react'
import { Button, ScrollView, View } from 'react-native'
import { payWithPayPal } from '../../../services/paypal'
import { styles } from './styles/testScreen.test'

export const TestScreen = props => {
  const navigateTo = (routeName, params = {}, action) => {
    return (
      <View style={styles.textRow}>
        <Button
          title={routeName}
          onPress={() => props.navigation.navigate(routeName, params, action)}
        />
      </View>
    )
  }

  const openPayPalScreen = () => {
    return (
      <View style={styles.textRow}>
        <Button
          title={'PayPal Payment Screen'}
          onPress={() =>
            payWithPayPal('150.55', 'Testing PayPalPayment', alert, alert)
          }
        />
      </View>
    )
  }

  return (
    <ScrollView>
      {navigateTo('SignIn')}
      {navigateTo('SignUp')}
      {navigateTo('Home')}
      {navigateTo('Profile')}
      {navigateTo('ManageAccount')}
      {navigateTo('BookScanner')}
      {navigateTo('ShoppingBag')}
      {navigateTo('ConfirmationScreen')}
      {navigateTo('BookDetails', { isbn: '97-802-611-02941', screenType: 'SELL' })}
      {navigateTo('BookList')}
      {navigateTo('ShoppingBag')}
      {navigateTo('BuyBooksProcess')}
      {navigateTo('SellBooksProcess')}
      {navigateTo('ClubMember10')}
      {navigateTo('ClubMember20')}
      {openPayPalScreen()}
      {/* <ModalWithTextAndButton // DUMMY DATA
        isVisible
        onCancel={() => alert('fechando o modal')}
        title={'Rent conditions'}
        paragraphs={RENT_CONDITIONS}
        buttonTitle={'Accept conditions'}
        onPressButton={() => alert('❤️ thank you')}
      /> */}
    </ScrollView>
  )
}
