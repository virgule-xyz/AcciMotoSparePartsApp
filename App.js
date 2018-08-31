/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ColorOrange, ColorBlack} from './UI';
import ActionButton from './components/button';
import Logo from './components/logo';

import {
  Platform,
  StyleSheet,
  Container,
  TouchableNativeFeedback,
  Text,
  BackHandler,
  PermissionsAndroid,
  View
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      language: 'fr'
    }
  }

  onPressFR = () => {
    this.setState({language: 'fr'});
  }

  onPressPL = () => {
    this.setState({language: 'gb'});
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.goBack(); // works best when the goBack is async
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (<View style={styles.container}>
      <Logo style={styles.logo} language={this.state.language} />
      <View style={styles.buttons}>
        <ActionButton style={{ width:"35%" }} label="Français" onPress={() => {
            this.onPressFR()
          }}/>
        <ActionButton style={{ width:"35%" }} label="Polski" onPress={() => {
            this.onPressPL()
          }}/>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  logo: {
    width: "90%",
    marginBottom: "20%"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    width: "90%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
