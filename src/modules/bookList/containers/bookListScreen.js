import React, {Component} from 'react'
import { connect } from 'react-redux'

import { BookList } from '../components/bookList'

class BookListContainer extends Component {
  static navigationOptions = {
    title: 'Book list',
    header: null
  }

  selectBookList = (typeList) => this.props.items[typeList]

  render () {
    const { typeList } = this.props.navigation.state.params
    return (
      <BookList
        list={this.selectBookList(typeList)}
        navigateBack={this.goBack}
      />
    )
  }
  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = state => ({ items: state.books })

export const BookListScreen = connect(mapStateToProps)(BookListContainer)
