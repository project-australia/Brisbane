import React from 'react'
import { View } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'

import { styles } from './styles/profileItem.style'
import { RowWithIconButton } from '../../shared/components/rowWithIconButton'

export const ProfileRedirectItem = ({ title, data, onPress }) =>
  data && data.length !== '' ? (
    <View style={styles.wrap}>
      <MenuTitle title={title} />
      <RowWithIconButton
        title={data}
        iconName={'chevron-right'}
        onPress={onPress}
      />
    </View>
  ) : null
