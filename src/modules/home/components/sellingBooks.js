import React from 'react'
import { Button, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/home.styles'

export class SellingBookAmount extends React.Component<{}> {
  static propTypes = {
    onAddBookPressed: PropTypes.func.isRequired,
    sellingAmount: PropTypes.number.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Selling ${this.props.sellingAmount} books`}
        </Text>
        <Button
          title='ADD'
          onPress={this.props.onAddBookPressed}
        />
      </View>
    )
  }
}
