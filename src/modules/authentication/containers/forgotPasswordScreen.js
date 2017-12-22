import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { forgotPasswordAction } from '../../../redux/actions'
import { ForgotPassword } from '../components/forgotPassword'

export const ForgotPasswordContainer = (props) => (
  <ForgotPassword
    resetPassword={props.resetPassword}
    alert={props.alert}
  />
)

const mapStateToProps = state => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = dispatch => ({
  resetPassword: email => dispatch(forgotPasswordAction(email))
})

ForgotPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  alert: PropTypes.shape({
    showAlert: PropTypes.bool.isRequired,
    message: PropTypes.string
  }).isRequired
}

export const ForgotPasswordScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer)
