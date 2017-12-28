import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ConfirmBook } from '../components/confirmBook'
// import { book } from '../../home/propTypes/book'

class bookScanner extends Component {
  static navigationOptions = {
    title: 'Sell your book',
    header: null
  }

  // static propTypes = {
  //   book
  // }

  state={
    // FIX ME: dummy data for interface building
    book: {
      id: 9789400742482,
      imageUri: 'https://kbimages1-a.akamaihd.net/6d470878-71ea-4acc-89a1-6673dac042db/353/569/90/False/the-philosophy-of-computer-games.jpg',
      title: 'The Philosophy of Computer Games (Philosophy of Engineering and Technology)',
      author: 'John Richard Sageng, Hallvard Fossheim, Tarej Mandt Larsen',
      edition: '10th edition',
      aboutBook: 'Computer games have become a major cultural and economic force, and a subject of extensive academic interest. Up until now, however, computer games have received relatively little attention from philosophy.',
      sellPrice: 150.46
    }
  }

  render () {
    console.log('=>', this.props.book)
    return (
      <ConfirmBook
        book={this.state.book}
        navigateBack={this.goBack}
        navigateToShoppingBag={this.navigateTo('ShoppingBag')}
        onPressSell={() => console.warn('hello :D')}
        onPressDonate={() => console.warn('hello :D')}
        onPressBallardsClub={() => console.warn('hello :D')}
      />
    )
  }

  navigateTo = screen => () => this.props.navigation.navigate(screen, {})
  goBack = () => this.props.navigation.goBack()
}

const mapStateToProps = ({ book: { sellingBook } }) => ({
  book: sellingBook
})

export const confirmBookScreen = connect(mapStateToProps)(bookScanner)
