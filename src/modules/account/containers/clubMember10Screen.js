import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../constants'
import { Navbar } from '../../shared/components/navbar'
import { SolidButton } from '../../shared/components/buttons'
import { connect } from 'react-redux'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'

class ClubMember10Container extends Component {
  static navigationOptions = {
    title: '10% Club Member',
    header: null
  }

  render () {
    return (<View>
      <Navbar title={'10% Club Member'} onBack={this.goBack} ignoreAndroidStatusBar />
      <ScrollView>
        <Text>
          10% Club
        </Text>
      </ScrollView>
      <SolidButton title={'Get Your 10% Only U$ 19,99/y'} onPress={this.goBack} />
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

const styles = StyleSheet.create({
  text: {
    ...Fonts.style.description,
    color: Colors.gray700,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.section
  }
})

export const ClubMember10Screen = connect(mapStateToProps, mapDispatchToProps)(
  ClubMember10Container
)