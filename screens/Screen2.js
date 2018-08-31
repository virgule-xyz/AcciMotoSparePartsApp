import React, {Component} from 'react';
import SparePartSelector from '../components/sparepartselector';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import {
  Platform,
  StyleSheet,
  BackHandler,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ColorOrange
} from '../UI';

type Props = {};

export default class Screen2 extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
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
    const language = this.props.navigation.getParam('language', 'fr');
    const lg = UIStrings[language];
    return (<View style={styles.container}>
      <AppHeader language={language}/>
      <SparePartSelector style={styles.spareParts} language={language}/>
      <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('ScreenBarcode', {language: language})
        }} style={styles.codebar}>
        <Text style={{
            fontSize: ButtonFontSize,
            color: '#fff'
          }}>{lg.code_barres}</Text>
      </TouchableOpacity>
      <AppFooter navigation={this.props.navigation} language={language} uploaderCount={0}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  codebar: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    elevation: ButtonElevation
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
