import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buyBook, rentBook } from '../../../redux/actions'
import { book } from '../../home/propTypes/book'

import { BookList } from '../components/bookList'

class BookListContainer extends Component {
  static propTypes = {
    featuredBooks: PropTypes.arrayOf(book).isRequired,
    recentBooks: PropTypes.arrayOf(book).isRequired,
    addBuyItemToShoppingBag: PropTypes.func.isRequired,
    addRentItemToShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    title: 'Book list',
    header: null
  }

  render () {
    const { typeList } = this.props.navigation.state.params
    const list =
      typeList === 'featured'
        ? this.props.featuredBooks
        : this.props.recentBooks

    return (
      <BookList
        list={list}
        navigateBack={this.goBack}
        onBuyPressed={this.onBuyPressed}
        onRentPressed={this.onRentPressed}
      />
    )
  }

  onBuyPressed = (book) => {
    this.props.addBuyItemToShoppingBag(book)
    this.props.navigation.navigate('ShoppingBag')
  }

  onRentPressed = (book) => {
    this.props.addRentItemToShoppingBag(book)
    this.props.navigation.navigate('ShoppingBag')
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = state => ({
  featuredBooks: state.books.featured,
  recentBooks: state.books.recent
})

const mapDispatchToProps = dispatch => {
  return {
    addBuyItemToShoppingBag: book => dispatch(buyBook(book)),
    addRentItemToShoppingBag: book => dispatch(rentBook(book))
  }
}

export const BookListScreen = connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
