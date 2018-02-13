import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Navbar } from '../../shared/components/navbar'
import { SolidButton } from '../../shared/components/buttons'
import { connect } from 'react-redux'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'

class ClubMember20Container extends Component {
  static navigationOptions = {
    title: '20% Club Member',
    header: null
  }

  render () {
    return (
      <View>
        <Navbar
          title={'20% Club Member'}
          onBack={this.goBack}
          ignoreAndroidStatusBar
        />
        <ScrollView>
          <Text>20% Club</Text>
        </ScrollView>
        <SolidButton
          title={'Get Your 20% Only U$ 19,99/y'}
          onPress={this.goBack}
        />
      </View>
    )
  }

  goBack = () => this.props.navigation.goBack()
  navigateToWallet = () => alert('navigate to my wallet')
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, form) => dispatch(updateProfileAction(userId, form)),
  logOut: () => dispatch(logOutAction())
})

const mapStateToProps = ({ authentication: { user } }) => ({
  user
})

export const ClubMember20Screen = connect(mapStateToProps, mapDispatchToProps)(
  ClubMember20Container
)
