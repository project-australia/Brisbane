import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'

import { AppStatusBar } from '../../shared/components/appStatusBar'
import { BookSearch } from './searchBook'
import { MenuTitle } from '../../shared/components/menuTitle'
import { NavbarMain } from '../../shared/components/navbar'
import { SellingBooks } from '../containers/sellingBooksContainer'
import { WalletBalanceAmount } from '../containers/walletBalanceContainer'

import { book } from '../propTypes/book'
import { styles } from './styles/home.styles'
import { BookList } from '../containers/bookList'

export class Home extends Component {
  static propTypes = {
    navigateToProfile: PropTypes.func.isRequired,
    navigateToScan: PropTypes.func.isRequired,
    navigateToShoppingBag: PropTypes.func.isRequired,
    searchBook: PropTypes.func.isRequired,
    recentlyAddedBooks: PropTypes.arrayOf(book).isRequired,
    featuredBooks: PropTypes.arrayOf(book).isRequired,
    userName: PropTypes.string.isRequired
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

  updateBookSearchValue = (bookSearchValue) => (
    this.setState({ bookSearchValue })
  )

  render () {
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
        <ScrollView>
          <BookSearch
            onSubmit={() => this.props.searchBook(this.state.bookSearchValue)}
            onScanPress={this.props.navigateToScan}
            value={this.state.bookSearchValue}
            onChangeText={this.updateBookSearchValue}
          />
          <View style={styles.twoColumnMenuWrap}>
            <View style={styles.menuColumn}>
              <SellingBooks navigateToScan={this.props.navigateToScan} />
            </View>
            <View style={styles.menuColumn}>
              <WalletBalanceAmount />
            </View>
          </View>
          <MenuTitle
            title={'Recently added'}
            button={recentlyAddedButton}
            style={styles.titleWrap}
          />
          <BookList books={this.props.recentlyAddedBooks} />
          <MenuTitle
            title={'Featured'}
            button={featuredButton}
            style={styles.titleWrap}
          />
          <BookList books={this.props.featuredBooks} />
        </ScrollView>
      </View>
    )
  }
}
