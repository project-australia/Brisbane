import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buy, rent } from '../../../redux/actions'
import { book } from '../propTypes/book'
import { HorizontalBookList } from '../components/horizontalBookList'

const BookListContainer = props => (
  <HorizontalBookList
    books={props.books}
    onBuyBook={props.onBuyBook}
    onRentBook={props.onRentBook}
  />
)

BookListContainer.propTypes = {
  onBuyBook: PropTypes.func.isRequired,
  onRentBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(book).isRequired
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
