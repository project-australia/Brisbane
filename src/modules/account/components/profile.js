import React from 'react'
import { ScrollView, View } from 'react-native'
// import moment from 'moment'

import { ModalWithInputProfile } from '../../shared/components/modals/modalWithInputProfile'
import { Navbar } from '../../shared/components/navbar'
import { ProfileItem } from './profileItem'
import { ProfileItemAddress } from './profileItemAddress'
import { ScreenTitleAndSubtitle } from './screenTitleAndSubtitle'
import { ProfileButtonItem } from './profileButtonItem'

import { styles } from './styles/profile.style'

const getSubscriptionText = subType => {
  switch (subType) {
    case 'TWENTY':
      return 'Elite Club'
    default:
      return 'Standard'
  }
}

export const Profile = ({
  onBackPress,
  user,
  modalTitle,
  navigateToNetwork,
  navigateToMyOrders,
  onLogoutPress,
  showEditModal,
  isEditModalOpen,
  onConfirmModal,
  onDismissModal,
  navigateToBugReportForm,
  navigateToFeedbackForm
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
          subtitle={`${getSubscriptionText(user.club)} member`}
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
        {/* <ProfileItem
          title={'Birth date'}
          data={
            user.birthDate ? moment(user.birthDate).format('MMM Do YYYY') : '-'
          }
          emptyDataLabel={'Add birth date'}
          onPress={() => showEditModal('Birth date')}
        /> */}
        <ProfileItemAddress
          title={'Address'}
          data={user.address}
          emptyDataLabel={'Add address'}
        />
        <ProfileButtonItem
          secondary
          title={'My Orders'}
          buttonTitle={'View my Orders'}
          onPress={navigateToMyOrders}
        />
        <ProfileButtonItem
          secondary
          title={'My Network'}
          buttonTitle={'View my Network'}
          onPress={navigateToNetwork}
        />
        <ProfileButtonItem
          secondary
          title={'Feedback'}
          buttonTitle={"We'd love to hear from you"}
          onPress={navigateToFeedbackForm}
        />
        <ProfileButtonItem
          secondary
          title={'Bugs'}
          buttonTitle={'Catch a bug? Please let us know'}
          onPress={navigateToBugReportForm}
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
