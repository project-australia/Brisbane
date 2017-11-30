import React, { Component } from 'react'
import { Button, View } from 'react-native'

import { styles } from './styles/testScreen.test'

export class TestScreen extends Component {
  navigateTo = (screen) => {
    return <View style={styles.textRow}>
      <Button
        title={screen}
        onPress={() => this.props.navigation.navigate(screen, {})}
      />
    </View>
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.navigateTo('SignIn')}
        {this.navigateTo('Home')}
        {this.navigateTo('Profile')}
        {this.navigateTo('ManageAccount')}
      </View>
    )
  }
}
