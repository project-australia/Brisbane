import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

import { styles } from './styles/home.styles'
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

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Hi, ${this.props.userName}!`}
        </Text>
        <BookSearch
          onSubmit={this.props.searchBook}
          onScanPress={this.props.navigateToScan}
        />
        <Button
          title='PROFILE'
          onPress={this.props.navigateToProfile}
        />
        <Button
          title='SHOPPING BAG'
          onPress={this.props.navigateToShoppingBag}
        />
        <SellingBooks />
        <WalletBalanceAmount />
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
      </View>
    )
  }
}
