import React from 'react'
import { Button, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/home.styles'

export class WalletBalance extends React.Component<{}> {
  static propTypes = {
    onWithDrawPressed: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Balance $${this.props.balance}`}
        </Text>
        <Button
          title='WITHDRAW'
          onPress={this.props.onWithDrawPressed}
        />
      </View>
    )
  }
}
