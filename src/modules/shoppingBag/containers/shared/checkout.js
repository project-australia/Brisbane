import { Alert } from 'react-native'
import { createOrder } from '../../../../services/backend/orderService'

// FIXME: Fiz isso para evitar duplicacao de código, em tese o processo de checkout é o mesmo
// para in person delivery.
// Vou refatorar para um CheckoutWrapper em breve

export const generateOrder = async (user, books, shippingMethod, type) =>
  createOrder(type, shippingMethod, books, user.address, user.id)

const inPersonCheckout = async (self, checkoutType) => {
  const { user, books } = self.props
  self.setState({ isLoading: true })

  try {
    await generateOrder(user, books, 'IN_PERSON', checkoutType)
    onCheckoutSuccess(self, checkoutType)
  } catch (error) {
    alert('in person checkout failed')
    console.log('In Person checkout failed', JSON.stringify(error))
  } finally {
    self.setState({ isLoading: false })
  }
}

const onCheckoutSuccess = (self, type) => {
  self.props.cleanShoppingBag()
  self.props.navigation.navigate('Home')
}

export const confirmInPersonCheckout = (self, checkoutType) => {
  Alert.alert(
    'In Person Payment',
    'Do you wanna proceed to in person checkout',
    [
      {
        text: 'Sure thing',
        onPress: () => inPersonCheckout(self, checkoutType)
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]
  )
}
