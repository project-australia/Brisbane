import React from 'react'
import { ScrollView, View } from 'react-native'

import { Navbar } from '../../shared/components/navbar'
import { ProfileItem } from './profileItem'
import { ScreenTitleAndSubtitle } from './screenTitleAndSubtitle'
import { ProfileRedirectItem } from './profileRedirectItem'
import { styles } from './styles/profile.style'

const getSubscriptionText = (subType) => {
  switch (subType) {
    case 'tenPercent':
      return '10% off'
    case 'twentyPrecent':
      return '20% off'
    default:
      return 'Standard'
  }
}

const setUserNetworkNumber = (network) => (
  (network && network.length > 0) && `${network.length} registered members`
)

export const Profile = ({ onBackPress, user, navigateToNetwork }) => {
  return (
    <View style={styles.container}>
      <Navbar onBack={onBackPress} />
      <ScrollView>
        <ScreenTitleAndSubtitle
          title={user.name}
          subtitle={`${getSubscriptionText(user.subscription)} member`}
        />
        <ProfileItem
          title={'School'}
          data={user.school}
          emptyDataLabel={'Add school name'}
        />
        <ProfileItem
          title={'Phone'}
          data={user.phone}
          emptyDataLabel={'Add phone number'}
        />
        <ProfileItem
          title={'Birth date'}
          data={user.birthDate}
          emptyDataLabel={'Add birth date'}
        />
        <ProfileItem
          title={'Address'}
          data={user.address}
          emptyDataLabel={'Add address'}
        />
        <ProfileItem
          title={'PayPal account'}
          data={user.address}
          emptyDataLabel={'Add account'}
        />
        <ProfileRedirectItem
          title={'Network'}
          data={setUserNetworkNumber(user.network)}
          onPress={navigateToNetwork}
        />
      </ScrollView>
    </View>
  )
}
