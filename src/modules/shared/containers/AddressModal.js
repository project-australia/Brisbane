import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native'
import { updateProfileAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { UpdateAddressModal } from '../components/modals/updateAddressModal'

class AddressModalContainer extends Component {
  static navigationOptions = { header: null }

  static propTypes = {
    onShowModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    onHideModal: PropTypes.func
  }

  static defaultProps = {
    onHideModal: () => {}
  }

  state = { keyboardHeight: 0 }

  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardShow
      )
      this.keyboardWillHideListener = Keyboard.addListener(
        'keyboardWillHide',
        this.keyboardHide
      )
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener.remove()
      this.keyboardWillHideListener.remove()
    }
  }

  keyboardShow = keyboardData =>
    this.setState({
      keyboardHeight: keyboardData.endCoordinates.height
    })

  keyboardHide = () => this.setState({ keyboardHeight: 0 })

  updateUserAddress = address => {
    const user = this.props.user
    user.address = address
    this.props.updateProfile(user.id, user)
    this.hideModal()
  }

  hideModal = () => {
    this.props.onHideModal()
  }

  showModal = () => {
    this.props.onShowModal()
  }

  render() {
    return (
      <UpdateAddressModal
        onDismiss={this.hideModal}
        visible={this.props.visible}
        address={this.props.user.address}
        updateUserAddress={this.updateUserAddress}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, form) => dispatch(updateProfileAction(userId, form))
})

const mapStateToProps = ({ authentication: { user } }) => ({
  user
})

export const AddressModal = connect(mapStateToProps, mapDispatchToProps)(
  AddressModalContainer
)
