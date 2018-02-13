import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { book } from '../propTypes/book'
import { styles } from '../components/styles/home.styles'
import { buyBook, rentBook } from '../../../redux/actions'
import { MenuTitle } from '../../shared/components/menuTitle'
import { HorizontalBookList } from '../components/horizontalBookList'

class BookListContainer extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onBuyBook: PropTypes.func.isRequired,
    onRentBook: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(book).isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.object.isRequired
  }

  render () {
    return (
      <View>
        <MenuTitle
          title={this.props.title}
          button={this.props.button}
          style={styles.titleWrap}
        />
        <HorizontalBookList
          books={this.props.books}
          title={this.props.title}
          button={this.props.button}
          onBuyBook={book =>
            this.props.navigation.navigate('BookDetails', {
              book,
              screenType: 'BUY'
            })
          }
          onRentBook={book =>
            this.props.navigation.navigate('BookDetails', {
              book,
              screenType: 'RENT'
            })
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ authentication: { user } }) => ({
  displayName: user.displayName
})

const mapDispatchToProps = dispatch => ({
  onBuyBook: item => dispatch(buyBook(item)),
  onRentBook: item => dispatch(rentBook(item))
})

export const BookList = connect(mapStateToProps, mapDispatchToProps)(
  BookListContainer
)
