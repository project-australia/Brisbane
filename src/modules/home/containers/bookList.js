import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buyBook, rentBook } from '../../../redux/actions'
import { book } from '../propTypes/book'
import { HorizontalBookList } from '../components/horizontalBookList'

class BookListContainer extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onBuyBook: PropTypes.func.isRequired,
    onRentBook: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(book).isRequired
  }

  render () {
    return (
      <HorizontalBookList
        books={this.props.books}
        onBuyBook={book =>
          this.props.navigation.navigate('BookDetails', { book, screenType: 'BUY' })
        }
        onRentBook={book =>
          this.props.navigation.navigate('BookDetails', { book, screenType: 'RENT' })
        }
      />
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
