import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { MenuTitle } from '../../shared/components/menuTitle'
import { CardFooterButton } from '../../shared/components/buttons'

import { styles } from './styles/home.styles'
import { Colors, Metrics } from '../../../constants'

export const WalletBalance = props => {
  return (
    <View>
      <MenuTitle title={'My Wallet'} style={styles.flatTitle} />
      <View style={styles.card}>
        <View style={styles.menuColumn}>
          <View style={styles.featuredIconWrap}>
            <Icon
              name={'wallet'}
              color={Colors.gray200}
              size={Metrics.icons.large}
            />
          </View>
          <Text style={styles.secondaryInput}>Balance</Text>
          <Text style={styles.primaryText}>$ {props.balance}</Text>
        </View>
        <CardFooterButton
          onPress={props.onWithDrawPressed}
          title={'Withdraw'}
        />
      </View>
    </View>
  )
}

WalletBalance.propTypes = {
  onWithDrawPressed: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired
}
