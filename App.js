/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Container,
  Button,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  /**
 * [constructor description]
 * @param {[type]} props [description]
 */
  constructor(props) {
    super(props);
    this.state = {
      language: 'fr'
    }
  }

  onPressFR = () => {
    this.setState({
      language: 'fr'
    });
  }

  onPressPL = () => {
    this.setState({
      language: 'gb'
    });
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const src = (this.state.language === 'fr')
      ? require('./assets/images/logo_fr.png')
      : require('./assets/images/logo_gb.png');
    return (<View style={styles.container}>
      <Image data-test="component-logo" resizeMode="contain" source={src} style={{
          width: "90%",
          height: "50%"
        }}/>
      <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 44,
          width: "100%"
        }}>
        <Button data-test="component-lang-button" title="Français" color="#841584" accessibilityLabel="Choisir la langue française" onPress={ () => {this.onPressFR()} }/>
        <Button data-test="component-lang-button" title="Polinski" color="#841584" accessibilityLabel="Choisir la langue polonaise" onPress={ () => {this.onPressPL()} }/>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
