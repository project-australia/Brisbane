import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { styles } from './styles/priceRow.style'
import { Metrics } from '../../../constants'
import { SimpleButton } from './buttons'

export const InviteToRep = props => {
  return (
    <View style={styles.row}>
      <View style={styles.rowInfo}>
        <Text style={styles.description}>Make Extra Cash</Text>
        <Text style={styles.description}>Just Refer Friends</Text>
      </View>
      <SimpleButton
        title={'Learn more'}
        onPress={props.onPressBallardsClub}
        style={{
          marginRight: Metrics.section,
          marginVertical: Metrics.baseMargin,
          padding: 7
        }}
      />
    </View>
  )
}

InviteToRep.propsType = {
  onPressBallardsClub: PropTypes.func.isRequired
}
