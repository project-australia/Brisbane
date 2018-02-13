import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../constants'
import { Navbar } from '../../shared/components/navbar'
import { SolidButton } from '../../shared/components/buttons'
import { connect } from 'react-redux'
import {
  updateProfileAction,
  logOutAction
} from '../../../redux/actions/async/authenticationAsyncActions'
import { payWithPayPal } from '../../../services/paypal'

class ClubMember10Container extends Component {
  static navigationOptions = {
    title: '10% Club Member',
    header: null
  }

  render () {
    return (
      <View>
        <Navbar
          title={'10% Club Member'}
          onBack={this.goBack}
          ignoreAndroidStatusBar
        />
        <ScrollView>
          <Text style={styles.text}>10% Club</Text>
        </ScrollView>
        <SolidButton
          title={'Get Your 10% Only U$ 2,99/y'}
          onPress={this.checkoutWithPaypal}
        />
      </View>
    )
  }

  goBack = () => this.props.navigation.goBack()
  checkoutWithPaypal = async () => {
    try {
      await payWithPayPal('2.99', '10 Club Member', this.onPayPalOnSuccess())
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
      this.defaultAlertPopUp('Sorry. Request Failed')
    }
  }
  onPayPalOnSuccess = () => async paypalResponse => {
    const { user } = this.props
    await this.props.updateProfile(user.id, { club: 'TEN' })
    this.defaultAlertPopUp(
      'Successfully registered',
      this.props.navigation.navigate('Home', {})
    )
  }
  defaultAlertPopUp = (msg, press = () => {}) =>
    Alert.alert(
      '10% Club Member',
      msg,
      [
        {
          text: 'Ok',
          onPress: () => press
        }
      ],
      { cancelable: false }
    )
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
