import React, {
  Component
} from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'

export default class Logo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const src = (this.props.language === 'fr')
      ? require('../assets/images/logo_fr.png')
      : require('../assets/images/logo_gb.png');

      return (
        <Image resizeMode="contain" source={src} style={this.props.style} />
      )
    }
}
