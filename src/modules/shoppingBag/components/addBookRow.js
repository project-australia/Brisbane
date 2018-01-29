import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './styles/shoppingBagItems.style'
import { Metrics, Colors } from '../../../constants'

export const AddBookRow = ({ title, onPress }) => {
  const cardStyle = [styles.card, { borderColor: 'transparent' }]
  return (
    <TouchableOpacity onPress={onPress} style={cardStyle}>
      <View style={styles.contentWrap}>
        <View style={styles.image}>
          <Icon
            name={'plus'}
            size={Metrics.icons.small}
            color={Colors.gray500}
          />
        </View>
        <View style={styles.detailsWrap}>
          <Text numberOfLines={1} style={styles.titleLight}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

AddBookRow.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
