import React from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/home.styles'
import { FormTextInput } from '../../authentication/components/formTextInput'

export class BookSearch extends React.Component<{}> {
  static propTypes = {
    onScanPress: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <FormTextInput
          placeholder='Search book or scan barcode'
        />
        <Button
          title='SCAN'
          onPress={this.props.onScanPress}
        />
      </View>
    )
  }
}
