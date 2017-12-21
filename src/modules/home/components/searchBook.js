import React from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from '../../shared/components/touchable'

import { styles } from './styles/home.styles'
import { Colors, Metrics, Values } from '../../../constants'

export class BookSearch extends React.Component<{}> {
  static propTypes = {
    onScanPress: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.searchBarWrap}>
        <View style={styles.iconWrap}>
          <Icon
            name={'magnify'}
            size={Metrics.icons.small}
            color={Colors.gray500}
          />
        </View>
        <TextInput
          placeholder="Search book or scan barcode"
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
        />
        <Touchable
          background={Values.BackgroundBorderlessRipple}
          onPress={this.props.onScanPress}
          style={styles.iconWrap}
        >
          <Icon
            name={'barcode-scan'}
            size={Metrics.icons.medium}
            color={Colors.gray700}
          />
        </Touchable>
      </View>
    )
  }
}
