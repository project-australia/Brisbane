import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View } from 'react-native'

import { styles } from './styles/home.styles'
import { AppStatusBar } from '../../shared/components/appStatusBar'
import { NavbarMain } from '../../shared/components/navbar'
import { SellingBooks } from '../containers/sellingBooksContainer'
import { WalletBalanceAmount } from '../containers/walletBalanceContainer'
import { BookSearch } from './searchBook'
import { book } from '../propTypes/book'
import { HorizontalBookList } from './HorizontalBookList'

export class Home extends React.Component<{}> {
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
          <Text style={styles.welcome}>
            Recently added
          </Text>
          <HorizontalBookList
            books={this.props.recentlyAddedBooks}
          />
          <Text style={styles.welcome}>
            Recently added
          </Text>
          <HorizontalBookList
            books={this.props.recentlyAddedBooks}
          />
        </ScrollView>
      </View>
    )
  }
}
