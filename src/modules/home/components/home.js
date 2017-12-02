import React from 'react'
import { Button, Text, View } from 'react-native'
import Config from 'react-native-config'
import PropTypes from 'prop-types'

import { styles } from './styles/home.styles'
import { instructions } from '../constants/instructions'

export class Home extends React.Component<{}> {
  static propTypes = {
    navigateToProfile: PropTypes.func.isRequired,
    navigateToShoppingBag: PropTypes.func.isRequired,
    userName: PropTypes.string
  }

  static defaultProps = {
    userName: 'Guest'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Hi, ${this.props.userName}!`}
        </Text>
        <Button
          title='PROFILE'
          onPress={this.props.navigateToProfile}
        />
        <Button
          title='SHOPPING BAG'
          onPress={this.props.navigateToShoppingBag}
        />
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          {`this is a secret: ${Config.TEST}`}
        </Text>
      </View>
    )
  }
}
