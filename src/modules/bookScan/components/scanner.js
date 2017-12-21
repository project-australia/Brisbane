import React from 'react'
import { View } from 'react-native'
import Camera from 'react-native-camera'

import { styles } from './styles/scanner.style'

const onBarCodeRead = e => {
  alert(`Barcode Found! Type: ${e.type} \nData: ${e.data}`)
}

export const Scanner = props => (
  <Camera
    style={props.style}
    aspect={Camera.constants.Aspect.fill}
    onBarCodeRead={onBarCodeRead}
  />
)

Scanner.propTypes = { style: View.propTypes.style }
Scanner.defaultProps = { style: styles.scanner }
