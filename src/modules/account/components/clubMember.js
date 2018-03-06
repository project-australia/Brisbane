import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, Alert } from 'react-native'
import { Navbar } from '../../shared/components/navbar'
import { FormOutlineButton } from '../../shared/components/buttons'
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
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>• Get 10% More for books you sell</Text>
        <Text style={styles.text}>• Get 10% Off of purchases</Text>
        <Text style={styles.text}>• Get 10% Off of rentals</Text>
      </ScrollView>
    )
  }

  show20club = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>• Get 20% More for books you sell</Text>
        <Text style={styles.text}>• Get 20% Off of purchases</Text>
        <Text style={styles.text}>• Get 20% Off of rentals</Text>
      </ScrollView>
    )
  }

  showRep = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>• Just sign people up to the app (friends, classmates, coworkes, teammates, etc.)</Text>
        <Text style={styles.text}>• When they buy, sell or rent you get a commiission</Text>
        <Text style={styles.text}>• If they become a rep too, you even get a commission from the people they sign up</Text>
        <Text style={styles.text}>• The more you sign up the better!</Text>
        <Text style={styles.text}>• It's so easy!</Text>
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
        {this.props.club !== 'TWENTY' && <FormOutlineButton
          title={this.props.buttonText}
          onPress={this.checkoutWithPaypal}
          style={styles.input}
        />
        }
      </View>
    )
  }
//   <View style={styles.buttonGroup}>
//   <FlatButton
//     secondary
//     containerStyle={styles.button}
//     title={this.props.buttonText}
//     onPress={this.checkoutWithPaypal}
//   />
// </View>
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
