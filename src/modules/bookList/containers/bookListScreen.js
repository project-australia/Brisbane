import React, {Component} from 'react'
import { connect } from 'react-redux'

import { BookList } from '../components/bookList'

const books = [
  {
    id: '345345',
    imageUri: 'https://www.fillmurray.com/200/300',
    title: 'Book Name 1',
    author: 'Book Author',
    edition: '3rd edition',
    aboutBook: '',
    sellPrice: 12.97
  },
  {
    id: '3445',
    imageUri: 'https://www.fillmurray.com/100/150',
    title: 'Book with a really big name that will extrapolate the title line',
    author: 'Book Author also with a big name that should break line',
    edition: '3rd edition',
    aboutBook: '',
    sellPrice: 33.55
  }
]

class BookListContainer extends Component {
  static navigationOptions = {
    title: 'Book list',
    header: null
  }

  state = { books }

  render () {
    return (
      <BookList
        list={this.state.books}
        navigateBack={this.goBack}
      />
    )
  }

  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = state => ({ items: state.books })

export const BookListScreen = connect(mapStateToProps)(BookListContainer)
