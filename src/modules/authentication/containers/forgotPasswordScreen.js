import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { forgotPasswordFirebase } from '../../../redux/actions'
import { styles } from '../containers/styles/forgotPasswordScreen.styles'
import { View, Button, TextInput } from 'react-native'

export class ForgotPasswordContainer extends Component {
  static defaultProps = {email: ''}
  static propTypes = {resetPassword: PropTypes.func.isRequired}

  state = {
    email: '',
    alert: {
      showAlert: false,
      message: ''
    }
  }

  render () {
    const { resetPassword } = this.props
    return (
      <View style={styles.screen} >
        <TextInput
          onChangeText={(email) => { this.setState({email}) }}
          autoCapitalize='none'
          value={this.state.email}
        />
        <View style={styles.centralized}>
          <Button
            style={styles.loginButton}
            title='reset password'
            onPress={() => resetPassword(this.state.email)}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(forgotPasswordFirebase(email))
  }
}

export const ForgotPasswordScreen = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)
