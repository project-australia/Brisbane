import React from 'react'
import { Button, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { buyBook, rentBook, sellBook } from '../../../redux/actions'
import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import {
  buyingItems,
  sellingItems
} from '../../../redux/selectors/shoppingBagSelectors'
import { evaluateBookByISBN } from '../../../services/backend/bookService'
import { payWithPayPal } from '../../../services/paypal'
import { styles } from './styles/testScreen.test'

class TestScreenContainer extends React.Component {
  navigateTo = (routeName, params = {}, title) => {
    return (
      <View style={styles.textRow}>
        <Button
          title={title || routeName}
          onPress={() => this.props.navigation.navigate(routeName, params)}
        />
      </View>
    )
  }

  openPayPalScreen = () => {
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

  addBookToBuyShoppingBag = () => {
    const { featuredBooks, recentlyAddedBooks } = this.props
    const featuredBook = featuredBooks[0]
    const recentBook = recentlyAddedBooks[0]

    if (featuredBook) {
      this.props.buyBook(featuredBook)
    }

    if (recentBook) {
      this.props.rentBook(recentBook)
    }
  }

  addBookToSellShoppingBag = async () => {
    try {
      const bookToSell = await evaluateBookByISBN('978-0201616224')
      this.props.sellBook(bookToSell)
    } catch (err) {
      console.log('No item added to selling shopping bag')
    }
  }

  async componentDidUpdate() {
    if (this.props.booksToSell.length === 0) {
      await this.addBookToSellShoppingBag()
    }

    if (this.props.booksToBuy.length === 0) {
      this.addBookToBuyShoppingBag()
    }
  }

  async componentDidMount() {
    await this.props.signIn('eduardomoroni@gmail.com', '123123')
  }

  render() {
    return (
      <ScrollView>
        {this.navigateTo(
          'Checkout',
          {
            screenType: 'SELL'
          },
          'Sell Checkout'
        )}
        {this.navigateTo(
          'Checkout',
          {
            screenType: 'BUY'
          },
          'Buy Checkout'
        )}
        {this.navigateTo('Home')}
        {this.navigateTo('SignIn')}
        {this.navigateTo('SignUp')}
        {this.navigateTo('Profile')}
        {this.navigateTo('BookScanner')}
        {this.navigateTo('ShoppingBag')}
        {this.navigateTo('ShoppingBag')}
        {this.navigateTo('ClubMembership')}
        {this.navigateTo('BookList', {
          typeList: 'featured'
        })}
        {this.navigateTo('BookDetails', {
          isbn: '978-1451639612',
          screenType: 'SELL'
        })}
        {this.openPayPalScreen()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { books } = state
  return {
    featuredBooks: books.featured,
    recentlyAddedBooks: books.recent,
    booksToBuy: buyingItems(state),
    booksToSell: sellingItems(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBook: book => dispatch(buyBook(book)),
    rentBook: book => dispatch(rentBook(book)),
    sellBook: book => dispatch(sellBook(book)),
    signIn: (email, password) => dispatch(signInAction(email, password))
  }
}

export const TestScreen = connect(mapStateToProps, mapDispatchToProps)(
  TestScreenContainer
)
