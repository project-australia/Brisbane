import React, { Component } from 'react'
import Camera from 'react-native-camera'
import PropTypes from 'prop-types'

import { AppStatusBar } from '../../shared/components/appStatusBar'
import { Text, View } from 'react-native'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { Touchable } from '../../shared/components/touchable'

import { styles } from './styles/bookScanner.style'

export class Scanner extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onRead: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    return (
      <LoadingOverlay isLoading={this.props.isLoading} style={styles.container}>
        <AppStatusBar />
        <Camera
          style={styles.scanner}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={e => this.props.onRead(e.data)}
        />
        <View style={styles.darkTopOverlay}>
          <Text style={styles.overlayTitle}>Scan the book ISBN</Text>
          <Text style={styles.overlayDescription}>Place the full barcode on the center of the screen</Text>
        </View>
        <View style={styles.darkBottomOverlay}>
          <Touchable onPress={this.props.onCancel} style={styles.cancelButtonTouchArea}>
            <Text style={styles.overlayTitle}>Cancel</Text>
          </Touchable>
        </View>
      </LoadingOverlay>
    )
  }
}
