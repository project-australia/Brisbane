import React, { Component } from 'react'
import Camera from 'react-native-camera'
import PropTypes from 'prop-types'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'

import { styles } from './styles/bookScanner.style'

export class Scanner extends Component {
  static propTypes = {
    onRead: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    return (
      <LoadingOverlay isLoading={this.props.isLoading} style={styles.container}>
        <Camera
          style={styles.scanner}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={e => this.props.onRead(e.data)}
        />
      </LoadingOverlay>
    )
  }
}
