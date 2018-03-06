import React from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from '../../shared/components/touchable'

import { styles } from './styles/home.styles'
import { Colors, Metrics } from '../../../constants'

export const BookSearch = props => (
  <View style={styles.searchBarWrap}>
    <View style={styles.iconWrap}>
      <Icon
        name={'magnify'}
        size={Metrics.icons.small}
        color={Colors.gray500}
      />
    </View>
    <TextInput
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmit}
      placeholder="Type author, name or ISBN"
      returnKeyType={'search'}
      style={styles.searchInput}
      underlineColorAndroid={'transparent'}
      value={props.value}
    />
    <Touchable
      borderless
      onPress={props.onSubmit}
      style={styles.iconWrap}
    >
      <Icon
        name={'chevron-right'}
        size={Metrics.icons.medium}
        color={Colors.gray700}
      />
    </Touchable>
  </View>
)

BookSearch.defaultProps = {
  value: ''
}

BookSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string
}
