import React from 'react'
import { View } from 'react-native'
import Camera from 'react-native-camera'

import { styles } from './styles/scanner.style'

const Scanner = props => (
  <Camera
    style={props.style}
    aspect={Camera.constants.Aspect.fill}
    onBarCodeRead={ e => this.props.getQuote(e.data)}
  />
)

Scanner.propTypes = { style: View.propTypes.style }
Scanner.defaultProps = { style: styles.scanner }

export default Scanner
