import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, Alert } from 'react-native'
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
    user: PropTypes.object.isRequired,
    club: PropTypes.oneOf(['TEN', 'TWENTY', 'NONE']).isRequired,
    price: PropTypes.number.isRequired
  }

  static navigationOptions = {
    title: 'Join our club membership',
    header: null
  }

  show10club = () => {
    return (
      <ScrollView>
        <Text style={styles.text}>• Members get 10% off of rentals and purchases as well as get 10% more on top of our buying price.</Text>
        <Text style={styles.text}>• Can view their activity - What they bought or rented</Text>
      </ScrollView>
    )
  }

  show20club = () => {
    return (
      <ScrollView>
        <Text style={styles.text}>• Members get 20% off of rentals and purchases as well as get 20% more on top of our buying price.</Text>
        <Text style={styles.text}>• Can view their activity - What they bought or rented</Text>
      </ScrollView>
    )
  }

  showRep = () => {
    return (
      <ScrollView>
        <Text style={styles.text}>• Members get 10% off of rentals and purchases as well as get 10% more on top of our buying price.</Text>
        <Text style={styles.text}>• Can view their activity - What they bought or rented</Text>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar
          title={this.props.title}
          onBack={this.props.goBack}
          ignoreAndroidStatusBar
        />
        {this.props.club === 'NONE' && this.show10club()}
        {this.props.club === 'TEN' && this.show20club()}
        {this.props.club === 'TWENTY' && this.showRep()}
        {this.props.club !== 'TWENTY' && <SolidButton
          title={this.props.buttonText}
          onPress={this.checkoutWithPaypal}
        />}
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
