import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buyBook, rentBook } from '../../../redux/actions'
import { book } from '../../home/propTypes/book'

import { BookList } from '../components/bookList'
import { searchBooksByAuthorIsbnTitle } from '../../../services/backend/bookService'

class BookListSearchContainer extends Component {
  static propTypes = {
    featuredBooks: PropTypes.arrayOf(book).isRequired,
    recentBooks: PropTypes.arrayOf(book).isRequired,
    addBuyItemToShoppingBag: PropTypes.func.isRequired,
    addRentItemToShoppingBag: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    title: 'Searching Results list',
    header: null
  }
  state = {
    list: []
  }
  componentDidMount = async () => {
    const { searchParam } = this.props.navigation.state.params
    try {
      const list = await searchBooksByAuthorIsbnTitle(searchParam)
      this.setState({ list })
    } catch (err) {
      console.log('error na busca', err)
    }
  }

  render() {
    const { list } = this.state
    if (!list) {
      return null
    }

    return (
      <BookList
        list={list}
        navigateBack={this.goBack}
        onBuyPressed={this.onBuyPressed}
        onRentPressed={this.onRentPressed}
        navigateToBook={this.navigateToBook}
      />
    )
  }

  navigateToBook = (book, screenType) => this.props.navigation.navigate('BookDetails', {
    book,
    screenType
  })

  onBuyPressed = book => {
    this.props.addBuyItemToShoppingBag(book)
    this.props.navigation.navigate('ShoppingBag')
  }

  onRentPressed = book => {
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

export const BookListSearchScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListSearchContainer)
