import React, {Component} from 'react';
import {ColorOrange, ColorBlack, ButtonHeight} from '../UI';
import ActionButton from '../components/button';
import Logo from '../components/logo';
import {
  Platform,
  StyleSheet,
  Container,
  TouchableNativeFeedback,
  Text,
  BackHandler,
  PermissionsAndroid,
  View,
  AsyncStorage
} from 'react-native';

type Props = {};

export default class Screen1 extends Component<Props> {
  constructor(props) {
    super(props);
  }

  onPressFR = () => {
    this.props.navigation.navigate('Screen2', {language: 'fr'});
  }

  onPressPL = () => {
    this.props.navigation.navigate('Screen2', {language: 'gb'});
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (<View style={styles.container}>
      <Logo style={styles.logo} language='fr'/>
      <View style={styles.buttons}>
        <ActionButton style={{
            width: "35%"
          }} label="Français" onPress={() => {
            this.onPressFR()
          }}/>
        <ActionButton style={{
            width: "35%"
          }} label="Polski" onPress={() => {
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
    height: ButtonHeight,
    width: "90%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
