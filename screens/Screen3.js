import React, {Component} from 'react';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
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
      <View>
        <Text>rond gris, nom de la pièce</Text>
        <Text>marque / modèle / type de pièce</Text>
        <Text>Ligne #1</Text>
        <Text>Ligne #2</Text>
      </View>
      <View>
        <Text>Galerie de photos et bouto d'effacement</Text>
      </View>
      <View style={styles.actionButtonWrapper}>
        <TouchableOpacity style={[styles.actionButton, styles.actionButtonNew]} onPress={this.props.onButtonNewPress}>
          <Image source={require('../assets/images/add.png')} style={styles.icons} />
          <Text style={styles.buttonText}>Nouvelle photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.actionButtonEnd]} onPress={this.props.onButtonEndPress}>
          <Text style={styles.buttonText}>Terminer</Text>
          <Image source={require('../assets/images/check_mark.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#fff'
  },
  actionButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop:ButtonMargins
  },
  actionButton: {
    fontSize: ButtonFontSize,
    paddingLeft: ButtonPadding/2,
    paddingRight: ButtonPadding/2,
    borderRadius: ButtonRadius,
    backgroundColor: ColorOrange,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionButtonNew: {
    width:'40%'
  },
  actionButtonEnd: {
    width:'40%'
  },
  icons: {
    width:ButtonHeight-10,
    height:ButtonHeight-10
  }
});
