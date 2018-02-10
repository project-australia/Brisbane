import React from 'react'
import { ScrollView, View } from 'react-native'
import moment from 'moment'

import { ModalWithInputProfile } from '../../shared/components/modals/modalWithInputProfile'
import { Navbar } from '../../shared/components/navbar'
import { ProfileItem } from './profileItem'
import { ProfileItemAddress } from './profileItemAddress'
import { ScreenTitleAndSubtitle } from './screenTitleAndSubtitle'
import { ProfileRedirectItem } from './profileRedirectItem'
import { ProfileButtonItem } from './profileButtonItem'

import { styles } from './styles/profile.style'

const getSubscriptionText = subType => {
  switch (subType) {
    case 'TEN':
      return '10% off'
    case 'TWENTY':
      return '20% off'
    default:
      return 'Standard'
  }
}

const setUserNetworkNumber = network =>
  network && network.length > 0 && `${network.length} registered members`

export const Profile = ({
  onBackPress,
  user,
  modalTitle,
  navigateToNetwork,
  navigateToWallet,
  onLogoutPress,
  showEditModal,
  isEditModalOpen,
  onConfirmModal,
  onDismissModal
}) => {
  const rightIcon = [
    {
      name: 'pencil',
      onPress: () => showEditModal('Address')
    }
  ]
  return (
    <View style={styles.container}>
      <Navbar onBack={onBackPress} rightIcons={rightIcon} />
      <ScrollView>
        <ScreenTitleAndSubtitle
          title={user.name}
          subtitle={`${getSubscriptionText(user.subscription)} member`}
        />
        <ProfileItem
          title={'School'}
          data={user.school}
          emptyDataLabel={'Add school name'}
          onPress={() => showEditModal('School')}
        />
        <ProfileItem
          title={'Phone'}
          data={user.telephone}
          emptyDataLabel={'Add phone number'}
          onPress={() => showEditModal('Phone')}
        />
        <ProfileItem
          title={'Birth date'}
          data={moment(user.birthDate).format('MMM Do YYYY')}
          emptyDataLabel={'Add birth date'}
          onPress={() => showEditModal('Birth date')}
        />
        <ProfileItemAddress
          title={'Address'}
          data={user.address}
          emptyDataLabel={'Add address'}
        />
        <ProfileRedirectItem
          title={'Network'}
          data={setUserNetworkNumber(user.network)}
          onPress={navigateToNetwork}
        />
        <ProfileButtonItem
          secondary
          title={'My Wallet'}
          buttonTitle={'View my Wallet'}
          onPress={navigateToWallet}
        />
        <ProfileButtonItem buttonTitle={'Logout'} onPress={onLogoutPress} />
      </ScrollView>
      <ModalWithInputProfile
        visible={isEditModalOpen}
        title={modalTitle}
        user={user}
        onConfirm={onConfirmModal}
        onDismiss={onDismissModal}
      />
    </View>
  )
}
