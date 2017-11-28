import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { forgotPasswordAction } from '../../../redux/actions'
import { ForgotPassword } from '../components/forgotPassword'

export class ForgotPasswordContainer extends Component {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  render () {
    return (
      <ForgotPassword
        resetPassword={this.props.resetPassword}
        alert={this.props.alert}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (email) => dispatch(forgotPasswordAction(email))
})

export const ForgotPasswordScreen = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)
