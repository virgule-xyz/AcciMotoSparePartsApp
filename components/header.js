import React, {
  Component
} from 'react';

import Logo from './logo';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class AppHeader extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.headerWrapper}>
        <Logo language={this.props.language} style={styles.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    position:'absolute',
    height:100,
    width:'100%',
    top:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width:'80%',
    height:100
  }
});
