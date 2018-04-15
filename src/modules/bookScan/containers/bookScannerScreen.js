import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { throttle } from 'lodash'

import { Scanner } from '../components/scanner'

const waitingDelay = 1000
let gambiarra = false
let intervalID = 0

class BookScanner extends Component {
  static navigationOptions = {
    title: 'Book scan',
    header: null
  }

  state = {
    isReading: false
  }

  handleBackButtonClick = () => {
    this.navigateBack()
    return true
  }

  componentWillMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    )
  }

  componentDidMount() {
    // FIXME: Por algum motivo, o Scanner chama o navigate varias vezes
    intervalID = setInterval(() => {
      gambiarra = false
    }, waitingDelay)
  }

  componentWillUnmount() {
    clearInterval(intervalID)
  }

  onRead = isbn => {
    const throttledNavigation = throttle(this.navigateToBookDetails, waitingDelay)
    if (!this.state.isReading && !gambiarra) {
      gambiarra = true
      this.setState({ isReading: true })
      gambiarra && throttledNavigation(isbn)
      this.setState({ isReading: false })
    }
  }

  navigateBack = () => this.props.navigation.goBack()

  navigateToBookDetails = isbn =>
    this.props.navigation.navigate('BookDetails', {
      isbn,
      screenType: 'SELL'
    })

  render() {
    return (
      <Scanner
        onCancel={this.navigateBack}
        onRead={this.onRead}
        isLoading={this.state.isReading}
      />
    )
  }
}

export const BookScannerScreen = connect(null, null)(BookScanner)
