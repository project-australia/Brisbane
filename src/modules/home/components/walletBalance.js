import React, {Component} from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {MenuTitle} from '../../shared/components/menuTitle'
import {CardFooterButton} from '../../shared/components/buttons'

import {styles} from './styles/home.styles'
import {Colors, Metrics} from '../../../constants'

export class WalletBalance extends Component {
  static propTypes = {
    onWithDrawPressed: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired
  }

  render () {
    const titleButton = {text: 'View', onPress: this.props.onWalletViewPressed}
    return (
      <View>
        <MenuTitle title={'My Wallet'} button={titleButton} />
        <View style={[styles.card, styles.square]}>
          <View style={styles.menuColumn}>
            <View style={styles.featuredIconWrap}>
              <Icon name={'wallet'} color={Colors.gray200} size={Metrics.icons.large} />
            </View>
            <Text style={styles.secondaryInput}>Balance</Text>
            <Text style={styles.primaryText}>
              ${this.props.balance}
            </Text>
          </View>
          <CardFooterButton
            onPress={this.props.onWithDrawPressed}
            title={'Withdraw'}
          />
        </View>
      </View>
    )
  }
}
