import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles/SignInScreenStyles'
import { signInFirebase } from '../../../redux/actions'
import { LoginForm } from '../components/LoginForm'

export class SignInScreen extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  renderFooter = () => {
    return (
      <View style={styles.textRow}>
        <Text>Don’t have an account?</Text>
        <Button
          onPress={() => this.props.navigator.push({screen: 'carona.signUp'})}
        >
          <Text>Sign up now</Text>
        </Button>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.props.signIn}
        toast={this.props.alert}
        footer={this.renderFooter()}
      />
    )
  }
}

const mapStateToProps = (state) => ({alert: state.auth.alert})

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signInFirebase(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
