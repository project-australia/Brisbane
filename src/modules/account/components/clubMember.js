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
    goHome: PropTypes.func.isRequired,
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

  checkoutWithPaypal = async () => {
    try {
      await payWithPayPal(
        this.props.price,
        this.props.title,
        this.onClubJoinSuccess
      )
    } catch (error) {
      this.alert('Sorry. Request Failed')
    }
  }

  onClubJoinSuccess = async () => {
    const { user, nextClub, updateProfile } = this.props
    try {
      await updateProfile(user.id, { club: nextClub })
      this.successAlert('Successfully registered')
    } catch (err) {
      console.log('error on join Club')
    }
  }

  successAlert = (msg) =>
    Alert.alert(
      'Thanks for Join Club More',
      msg,
      [
        {
          text: 'Ok',
          onPress: this.props.goHome
        }
      ],
      { cancelable: false }
    )

  show10club = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>• Get 10% More for books you sell</Text>
        <Text style={styles.text}>• Get 10% Off of purchases</Text>
        <Text style={styles.text}>• Get 10% Off of rentals</Text>
        <FormOutlineButton
          title={this.props.buttonText}
          onPress={this.onClubJoinSuccess}
          style={styles.input}
        />
      </ScrollView>
    )
  }

  show20club = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>• Get 20% More for books you sell</Text>
        <Text style={styles.text}>• Get 20% Off of purchases</Text>
        <Text style={styles.text}>• Get 20% Off of rentals</Text>
        <FormOutlineButton
          title={this.props.buttonText}
          onPress={this.checkoutWithPaypal}
          style={styles.input}
        />
      </ScrollView>
    )
  }

  showRep = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>
          • Just sign people up to the app (friends, classmates, coworkes,
          teammates, etc.)
        </Text>
        <Text style={styles.text}>
          • When they buy, sell or rent you get a commission
        </Text>
        <Text style={styles.text}>
          • If they become a rep too, you even get a commission from the people
          they sign up
        </Text>
        <Text style={styles.text}>• The more you sign up the better!</Text>
        <Text style={styles.text}>• It's so easy!</Text>
      </ScrollView>
    )
  }

  renderClubComponent = () => {
    if (this.props.club === 'NONE') {
      return this.show10club()
    } else if (this.props.club === 'TEN') {
      return this.show20club()
    } else {
      return this.showRep()
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          title={this.props.title}
          onBack={this.props.goBack}
          ignoreAndroidStatusBar
        />
        {this.renderClubComponent()}
      </View>
    )
  }
}
