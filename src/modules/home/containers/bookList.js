import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buy, rent } from '../../../redux/actions'
import { book } from '../propTypes/book'
import { HorizontalBookList } from '../components/horizontalBookList'

class BookListContainer extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onBuyBook: PropTypes.func.isRequired,
    onRentBook: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(book).isRequired
  }

  // TODO: Navigation to book is not working
  // Need to create another screen
  // Need to use real book isbn or maybe pass the book object itself
  render () {
    return (
      <HorizontalBookList
        books={this.props.books}
        onBuyBook={book =>
          this.props.navigation.navigate('BookSelling', { isbn: book.isbn })
        }
        onRentBook={book =>
          this.props.navigation.navigate('BookSelling', { isbn: book.isbn })
        }
      />
    )
  }
}

const mapStateToProps = ({ authentication: { user } }) => ({
  displayName: user.displayName
})

const mapDispatchToProps = dispatch => ({
  onBuyBook: item => dispatch(buy(item)),
  onRentBook: item => dispatch(rent(item))
})

export const BookList = connect(mapStateToProps, mapDispatchToProps)(
  BookListContainer
)
