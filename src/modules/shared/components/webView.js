import React from 'react'
import { WebView as RNWebView } from 'react-native'

export class WebView extends React.PureComponent {
  state = {
    uri: null
  }

  constructor(props) {
    super(props)
    this.setState({ uri: this.props.uri })
  }

  componentDidMount() {
    const { uri } = this.props.navigation.state.params

    if (uri) {
      this.setState({ uri })
    }
  }

  render() {
    const { uri } = this.state

    if (!uri) {
      return null
    }

    return <RNWebView source={{ uri }} />
  }
}
