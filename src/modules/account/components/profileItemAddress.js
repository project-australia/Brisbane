import React from 'react'
import { View, Text } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { RowAdd } from '../../shared/components/rowAdd'
import { FlatButton } from '../../shared/components/buttons'

import { styles } from './styles/profileItemAddress.style'

export const ProfileItemAddress = ({ title, data, emptyDataLabel, onPress }) => {
  const { street, state, number, zipCode, city } = data
  console.log('data length', data)
  return (
    <View style={styles.wrap}>
      <MenuTitle title={title} />
      {typeof street === 'string' && street !== '' ? (
        <View style={styles.wrapView}>
          <Text style={styles.title}>Street: {street}</Text>
          <Text style={styles.title}>Number: {number}</Text>
          <Text style={styles.title}>Zipcode: {zipCode}</Text>
          <Text style={styles.title}>City: {city}</Text>
          <Text style={styles.title}>State: {state}</Text>
          <FlatButton secondary title={'Edit'} onPress={onPress} />
        </View>
      ) : (
        <RowAdd title={emptyDataLabel} onPress={onPress} />
      )}
    </View>
  )
}
