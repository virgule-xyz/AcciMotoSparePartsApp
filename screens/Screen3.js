import React, {Component} from 'react';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import {
  Platform,
  StyleSheet,
  BackHandler,
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

export default class Screen3 extends Component<Props> {
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
      <Text>TEXTE</Text>
      <AppFooter navigation={this.props.navigation} language={language} uploaderCount={0}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
