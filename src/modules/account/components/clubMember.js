import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, Alert } from 'react-native'
import { Navbar } from '../../shared/components/navbar'
import { FormButton } from '../../shared/components/buttons'
import { payWithPayPal } from '../../../services/paypal'
import { styles } from './styles/clubMember.style'

export class ClubMember extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
    goHome: PropTypes.func.isRequired,
    beARepresentant: PropTypes.func.isRequired,
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
      this.props.goBack()
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

  successAlert = msg =>
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

  show20club = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.lastLine}>
          The Elite Club is an exclusive membership club of Ballard Books.
        </Text>
        <Text style={styles.text}>
          As a member you'll get 20% extra cash for books you sell for just a
          small membership fee of $26.97 per year!
        </Text>
        <Text style={styles.text} />
        <Text style={styles.text}>
          Want to get more cash for college books?
        </Text>
        <FormButton
          title={this.props.buttonText}
          subtitle={this.props.buttonSubtitle}
          onPress={this.checkoutWithPaypal}
          style={styles.input}
        />
        <Text style={styles.subtext}>Cancellation period: </Text>
        <Text style={styles.subtext}>• Within 3 days after signing up</Text>
        <Text style={styles.subtext}>
          • Must be unused within the cancellation period{' '}
        </Text>
      </ScrollView>
    )
  }

  showRep = () => {
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>
          Be A Rep! Only offered to our Elite Club members!
        </Text>
        <Text style={styles.text}>
          You can be a rep and make commissions just by signing people up to the
          app. (friends, classmates, coworkers, teammates, etc.)
        </Text>
        <Text style={styles.text}>
          For example, If you're a rep, every time the person you signed up
          sells us books, you get a commission. If that person also becomes a
          rep then you both get a commission.
        </Text>
        <Text style={styles.text}>
          To make it simple we are just doing two levels. You don't have to deal
          with books or payments since Ballard Books does all that.
        </Text>
        <Text style={styles.text}>
          The more you sign up the better. It's a very easy way to make extra
          income.
        </Text>
        <FormButton
          title="Apply Today!"
          subtitle={this.props.buttonSubtitle}
          onPress={this.props.beARepresentant}
          style={styles.input}
        />
      </ScrollView>
    )
  }

  renderClubComponent = () => {
    if (this.props.club === 'NONE') {
      return this.show20club()
    } else if (this.props.club === 'TWENTY') {
      return this.showRep()
    } else {
      return null
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
