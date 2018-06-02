import React from 'react'
import { View, Text } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { RowAdd } from '../../shared/components/rowAdd'

import { styles } from './styles/profileItemAddress.style'
import { Colors } from '../../../constants'

const setEditButton = (onPress, hasStreet) =>
  onPress && hasStreet
    ? { text: 'Edit', onPress, color: Colors.secondary500 }
    : undefined

export const ProfileItemAddress = ({
  title,
  data,
  emptyDataLabel,
  onPress
}) => {
  const { street, state, zipCode, city } = data // FIXME: O que é esse data?
  const hasStreet = typeof street === 'string' && street !== ''
  return (
    <View style={styles.wrap}>
      <MenuTitle title={title} button={setEditButton(onPress, hasStreet)} />
      {hasStreet ? (
        <View style={styles.wrapView}>
          <Text style={styles.title}>Street: {street}</Text>
          <Text style={styles.title}>City: {city}</Text>
          <Text style={styles.title}>State: {state}</Text>
          <Text style={styles.title}>Zip Code: {zipCode}</Text>
        </View>
      ) : (
        <RowAdd title={emptyDataLabel} onPress={onPress} />
      )}
    </View>
  )
}
