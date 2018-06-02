import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'

import { AppStatusBar } from '../../shared/components/appStatusBar'
import { BookSearch } from './searchBook'
import { NavbarMain } from '../../shared/components/navbar'
import { SellingBooks } from '../containers/sellingBooksContainer'
import { WalletBalanceAmount } from '../containers/walletBalanceContainer'

import { book } from '../propTypes/book'
import { styles } from './styles/home.styles'
import { BookList } from '../containers/bookList'

export class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    navigateToProfile: PropTypes.func.isRequired,
    navigateToScan: PropTypes.func.isRequired,
    navigateToShoppingBag: PropTypes.func.isRequired,
    searchBook: PropTypes.func.isRequired,
    recentlyAddedBooks: PropTypes.arrayOf(book).isRequired,
    featuredBooks: PropTypes.arrayOf(book).isRequired,
    userName: PropTypes.string.isRequired,
    onRecentlyAddedPressed: PropTypes.func.isRequired,
    onFeaturedPressed: PropTypes.func.isRequired,
    navigateToSellBook: PropTypes.func.isRequired
  }

  state = {
    navRightIcons: [
      {
        name: 'account-circle',
        onPress: this.props.navigateToProfile
      },
      {
        name: 'cart-outline',
        onPress: this.props.navigateToShoppingBag
      }
    ],
    bookSearchValue: ''
  }

  updateBookSearchValue = bookSearchValue => this.setState({ bookSearchValue })

  render() {
    const recentlyAddedButton = {
      text: 'View All',
      onPress: this.props.onRecentlyAddedPressed
    }
    const featuredButton = {
      text: 'View All',
      onPress: this.props.onFeaturedPressed
    }

    return (
      <View style={styles.container}>
        <AppStatusBar />
        <NavbarMain
          title={`Hi, ${this.props.userName}`}
          rightIcons={this.state.navRightIcons}
        />
        <ScrollView bounces={false} keyboardShouldPersistTaps={'handled'}>
          <BookSearch
            onSubmit={() => this.props.searchBook(this.state.bookSearchValue)}
            onScanPress={this.props.navigateToScan}
            value={this.state.bookSearchValue}
            onChangeText={this.updateBookSearchValue}
          />
          <View style={styles.twoColumnMenuWrap}>
            <View style={styles.menuColumn}>
              <SellingBooks
                navigateToSellBook={this.props.navigateToSellBook}
                navigateToScan={this.props.navigateToScan}
              />
            </View>
            <View style={styles.menuColumn}>
              <WalletBalanceAmount />
            </View>
          </View>
          <BookList
            navigation={this.props.navigation}
            books={this.props.recentlyAddedBooks}
            title={'Recently Added'}
            button={recentlyAddedButton}
          />
          <BookList
            books={this.props.featuredBooks}
            navigation={this.props.navigation}
            title={'Featured'}
            button={featuredButton}
          />
        </ScrollView>
      </View>
    )
  }
}
