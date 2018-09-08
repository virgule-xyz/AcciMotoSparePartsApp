import React, {Component} from 'react';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import {
  Platform,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import UI, {
  UIStrings,
  ButtonHeight,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  ButtonFontSize,
  ButtonMargins,
  ColorOrange,
  ColorBlack
} from '../UI';

export default class Screen5 extends Component {
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

  render() {
    const language = this.props.navigation.getParam('language', 'fr');
    const lg = UIStrings[language];
    const uploaderCount = 0;

    return (<View style={styles.container}>
      <AppHeader language={language}/>
      <AppFooter navigation={this.props.navigation} language={language} uploaderCount={uploaderCount}/>
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  buttonend: {
    alignSelf:"flex-start",
    alignContent:"flex-start",
  }
});
