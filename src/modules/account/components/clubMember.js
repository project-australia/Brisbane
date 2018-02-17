import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Alert } from 'react-native'
import { Navbar } from '../../shared/components/navbar'
import { SolidButton } from '../../shared/components/buttons'
import { payWithPayPal } from '../../../services/paypal'
import { styles } from './styles/clubMember.style'

export class ClubMember extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    club: PropTypes.oneOf(['TEN', 'TWENTY']).isRequired,
    price: PropTypes.number.isRequired
  }

  static navigationOptions = {
    title: 'Join our club membership',
    header: null
  }

  render() {
    return (
      <View>
        <Navbar
          title={this.props.title}
          onBack={this.props.goBack}
          ignoreAndroidStatusBar
        />
        <ScrollView>
          <Text style={styles.text}>{this.props.bodyText}</Text>
        </ScrollView>
        <SolidButton
          title={this.props.buttonText}
          onPress={this.checkoutWithPaypal}
        />
      </View>
    )
  }

  checkoutWithPaypal = async () => {
    try {
      await payWithPayPal(
        this.props.price,
        this.props.title,
        this.onPayPalOnSuccess
      )
    } catch (error) {
      console.log('Paypal checkout failed', JSON.stringify(error))
      this.alert('Sorry. Request Failed')
    }
  }

  onPayPalOnSuccess = async paypalResponse => {
    const { user, club, updateProfile, navigate } = this.props
    await updateProfile(user.id, { club })
    this.alert('Successfully registered', navigate('Home'))
  }

  alert = (msg, press = () => {}) =>
    Alert.alert(
      this.props.title,
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
