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
    userName: PropTypes.string
  }

  static defaultProps = {
    userName: 'Guest'
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
    ]
  }

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
            onSubmit={this.props.searchBook}
            onScanPress={this.props.navigateToScan}
          />
          <View style={styles.twoColumnMenuWrap}>
            <View style={styles.menuColumn}>
              <SellingBooks />
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
