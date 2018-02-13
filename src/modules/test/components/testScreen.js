import React from 'react'
import { Button, ScrollView, View } from 'react-native'

import { payWithPayPal } from '../../../services/paypal'

import { styles } from './styles/testScreen.test'

const aBook = {
  updatedAt: '2018-01-29T22:57:43.999Z',
  createdAt: '2018-01-29T22:57:43.999Z',
  title: 'the king',
  images: {
    small:
      'https://images-na.ssl-images-amazon.com/images/I/51lMZ7YiDXL._SL75_.jpg',
    medium:
      'https://images-na.ssl-images-amazon.com/images/I/51lMZ7YiDXL._SL160_.jpg',
    large: 'https://images-na.ssl-images-amazon.com/images/I/51lMZ7YiDXL.jpg'
  },
  authors: ['rich koslowski'],
  featured: false,
  status: 'UNAVAILABLE',
  id: '5a6fa6e71438d000141fc922',
  isbn: '9780261102941'
}

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
      {navigateTo('BookDetails', { book: aBook })}
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
