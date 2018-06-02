import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Address } from '../../../domain/Address'
import { SimpleButton } from '../../shared/components/buttons'
import { MenuTitle } from '../../shared/components/menuTitle'
import { AddressModal } from '../../shared/containers/AddressModal'
import { styles } from './styles/shoppingBagItems.style'

export class CheckoutAddress extends React.Component {
  static navigationOptions = { header: null }
  static propTypes = {
    address: PropTypes.instanceOf(Address).isRequired
  }
  state = { isModalVisible: false }

  showModal = () => {
    this.setState({ isModalVisible: true })
  }

  hideModal = () => {
    this.setState({ isModalVisible: false })
  }

  renderAddressLine = (key, value) => (
    <View style={styles.wrappAddressItem}>
      <Text style={styles.addressItemLeft}>{`${key}: `}</Text>
      <Text style={styles.addressItemRight}>{value}</Text>
    </View>
  )

  render() {
    const { street, city, zipCode, state } = this.props.address
    return (
      <View>
        <AddressModal
          visible={this.state.isModalVisible}
          onShowModal={this.showModal}
          onHideModal={this.hideModal}
        />
        <MenuTitle title={'Shipping Address'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          {this.renderAddressLine('Street', street)}
          {this.renderAddressLine('City', city)}
          {this.renderAddressLine('State', state)}
          {this.renderAddressLine('Zip Code', zipCode)}
          <View style={styles.addressButtonContainer}>
            <SimpleButton
              secondary
              title={'Change Address'}
              onPress={this.showModal}
              style={styles.addressButton}
            />
          </View>
        </View>
      </View>
    )
  }
}
