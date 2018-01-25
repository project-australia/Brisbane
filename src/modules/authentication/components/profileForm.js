import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormHeader } from './formHeader'
import { styles } from './styles/loginFormStyles'
import { Colors } from '../../../constants'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

export class ProfileForm extends Component {
  static defaultProps = { footer: <View /> }
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  state = {
    userName: '',
    school: '',
    phoneNumber: '',
    referralName: '',
    loading: false
  }

  setUserName = name => this.setState({ name })
  setSchool = school => this.setState({ school })
  setPhoneNumber = phoneNumber => this.setState({ phoneNumber })
  setReferralName = referralName => this.setState({ referralName })

  onButtonPress = async () => {
    this.setState({ loading: true })
    const { email, password } = this.state
    await this.props.onButtonPress(email, password)
    this.setState({ loading: false })
  }

  componentWillReceiveProps(nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render () {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <FormHeader />
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
