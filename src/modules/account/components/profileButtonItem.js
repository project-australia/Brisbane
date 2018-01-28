import React from 'react'
import { View } from 'react-native'

import { MenuTitle } from '../../shared/components/menuTitle'
import { FlatButton } from '../../shared/components/buttons'

import { styles } from './styles/profileItem.style'

export const ProfileButtonItem = ({ title, buttonTitle, onPress, secondary }) => {
  return (
    <View style={styles.wrap}>
      <MenuTitle title={title} />
      <FlatButton
        secondary={secondary}
        title={buttonTitle}
        containerStyle={styles.itemBackground}
        onPress={onPress}
      />
    </View>
  )
}
