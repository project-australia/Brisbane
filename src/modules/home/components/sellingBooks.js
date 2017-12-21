import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { MenuTitle } from '../../shared/components/menuTitle'
import { CardFooterButton } from '../../shared/components/buttons'

import { styles } from './styles/home.styles'
import { Colors, Metrics } from '../../../constants'

export class SellingBookAmount extends Component {
  static propTypes = {
    onAddBookPressed: PropTypes.func.isRequired,
    sellingAmount: PropTypes.number.isRequired
  }

  render () {
    return (
      <View>
        <MenuTitle title={'Sell a book'} />
        <View style={[styles.card, styles.square]}>
          <View style={styles.menuColumn}>
            <View style={styles.featuredIconWrap}>
              <Icon
                name={'currency-usd'}
                color={Colors.gray200}
                size={Metrics.icons.large}
              />
            </View>
            <Text style={styles.secondaryInput}>Selling</Text>
            <Text style={styles.primaryText}>
              {`${this.props.sellingAmount} books`}
            </Text>
          </View>
          <CardFooterButton
            onPress={this.props.onAddBookPressed}
            secondary
            title={'Add'}
          />
        </View>
      </View>
    )
  }
}
