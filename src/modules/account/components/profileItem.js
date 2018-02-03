import React from 'react'
import { View } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { RowAdd } from '../../shared/components/rowAdd'
import { RowWithButton } from '../../shared/components/rowWithButton'

import { styles } from './styles/profileItem.style'

export const ProfileItem = ({ title, data, emptyDataLabel, onPress }) => {
  return (
    <View style={styles.wrap}>
      <MenuTitle title={title} />
      {typeof data === 'string' && data !== '' ? (
        <RowWithButton title={data} />
      ) : (
        <RowAdd title={emptyDataLabel} onPress={onPress} />
      )}
    </View>
  )
}
