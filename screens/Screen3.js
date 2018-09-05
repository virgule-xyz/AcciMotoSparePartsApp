import React, {Component} from 'react';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import SparePartResume from '../components/sparepartresume';
import {
  Platform,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Text,
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

  onButtonEndPress = () => {
    return false;
  }

  onButtonNewPress = () => {
    return false;
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
      <View style={{
          marginTop: 150
        }}>
        <SparePartResume language={language}/>
        <View>
          <TouchableOpacity style={styles.actionButtonNew} onPress={this.props.onButtonNewPress}>
            <Image source={require('../assets/images/add.png')} style={styles.icons}/>
            <Text style={styles.buttonText}>Nouvelle photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButtonWrapper}>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonEnd, 'display':'none']} onPress={this.props.onButtonEndPress}>
            <Text style={styles.buttonText}>Terminer</Text>
            <Image source={require('../assets/images/check_mark.png')} style={styles.icons}/>
          </TouchableOpacity>
        </View>
      </View>
      <AppFooter navigation={this.props.navigation} language={language} uploaderCount={0}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  actionButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  },
  actionButton: {
    fontSize: ButtonFontSize,
    paddingLeft: ButtonPadding / 2,
    paddingRight: ButtonPadding / 2,
    borderRadius: ButtonRadius,
    backgroundColor: ColorOrange,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionButtonNew: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorOrange,
    justifyContent: 'center',
    alignItems: 'center',
    width: ButtonHeight+50,
    height: ButtonHeight+50,
    elevation: ButtonElevation
  },
  actionButtonEnd: {
    width: '40%',
    display: 'none'
  },
  icons: {
    width: ButtonHeight - 10,
    height: ButtonHeight - 10
  },
  buttonText: {
    fontSize: ButtonFontSize,
    textAlign: 'center',
    color: ColorBlack
  }
});
