import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Scanner } from '../components/scanner'

let gambiarra = false
let intervalID = 0

class BookScanner extends Component {
  static navigationOptions = {
    title: 'Book Scan'
  }

  state = {
    isReading: false
  }

  componentDidMount() {
    // FIXME: Por algum motivo, o Scanner chama o navigate varias vezes
    intervalID = setInterval(() => { gambiarra = false }, 1500)
  }

  componentWillUnmount() {
    clearInterval(intervalID)
  }

  onRead = isbn => {
    if (!this.state.isReading && !gambiarra) {
      gambiarra = true
      this.setState({ isReading: true })
      gambiarra && this.navigateToBookDetails(isbn)
      this.setState({ isReading: false })
    }
  }

  navigateToBookDetails = (isbn) => this.props.navigation.navigate('BookDetails', {
    isbn,
    screenType: 'SELL'
  })

  render() {
    return <Scanner onRead={this.onRead} isLoading={this.state.isReading} />
  }
}

export const BookScannerScreen = connect(null, null)(BookScanner)
