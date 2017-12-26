import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { styles } from './styles/bookScanner.style'

class bookScanner extends Component {
  static propTypes = {
    book: PropTypes.object
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Livro
        </Text>
        <Text>
          {this.props.book.name}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = ({ book: { sellingBook } }) => ({
  book: sellingBook
})

export const confirmBookScreen = connect(mapStateToProps)(bookScanner)
