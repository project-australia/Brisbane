import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { styles } from './styles/loginFormStyles'
import { Colors } from '../../../constants'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

export class SignupForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  // FIXME: Test data only
  state = {
    userName: 'Eduardo Moroni',
    school: 'PUC',
    phoneNumber: '123456789',
    email: 'eduardomoroni@gmail.com',
    password: '123456',
    referralName: 'Hebert Porto',
    loading: false
  }

  setUserName = name => this.setState({ name })
  setSchool = school => this.setState({ school })
  setPhoneNumber = phoneNumber => this.setState({ phoneNumber })
  setEmail = email => this.setState({ email })
  setPassword = password => this.setState({ password })
  setReferralName = referralName => this.setState({ referralName })

  onButtonPress = async () => {
    this.setState({ loading: true })
    const { email, password } = this.state
    await this.props.onButtonPress(email, password)
    this.setState({ loading: false })
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render () {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <View style={styles.header}>
          <Text style={styles.title}>Ballard Books</Text>
        </View>
        <FormTextInput
          onChangeText={this.setUserName}
          value={this.state.userName}
          placeholder="Name"
          autoCapitalize="words"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
        />
        <FormTextInput
          onChangeText={this.setSchool}
          value={this.state.school}
          placeholder="School"
          autoCapitalize="words"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
        />
        <FormTextInput
          onChangeText={this.setPhoneNumber}
          value={this.state.phoneNumber}
          placeholder="Phone"
          autoCapitalize="none"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          keyboardType="phone-pad"
        />
        <FormTextInput
          onChangeText={this.setEmail}
          value={this.state.email}
          placeholder="Email address"
          autoCapitalize="none"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          keyboardType="email-address"
        />
        <FormTextInput
          onChangeText={this.setPassword}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
        />
        <FormTextInput
          onChangeText={this.setReferralName}
          value={this.state.referralName}
          placeholder="Indicated by someone?"
          autoCapitalize="words"
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </LoadingOverlay>
    )
  }
}
