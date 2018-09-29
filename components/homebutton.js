import React, { Component } from 'react';

import { Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

import {
  withLanguage,
  UIStrings,
  ButtonHeight,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  AlertTitle,
} from '../UI';

class HomeButton extends Component {
  constructor(props) {
    super(props);
  }
  askBeforeGoBackLanguages = () => {
    Alert.alert(
      AlertTitle,
      this.props.language.question_retour_home,
      [
        {
          text: this.props.language.non,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: this.props.language.oui,
          onPress: () => {
            this.props.navigation.navigate('Screen1');
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  askBeforeGoBackHome = () => {
    Alert.alert(
      AlertTitle,
      this.props.language.question_retour_piece,
      [
        {
          text: this.props.language.non,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: this.props.language.oui,
          onPress: () => {
            this.props.navigation.navigate('Screen2');
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  render() {
    console.warn(this.props);
    if (!!this.props.home)
      return (
        <TouchableOpacity
          onPress={() => {
            this.askBeforeGoBackHome();
          }}
        >
          <Text style={[this.props.style, styles.backHome]}>
            {this.props.language.changer.toUpperCase()}
          </Text>
        </TouchableOpacity>
      );
    else
      return (
        <TouchableOpacity
          onPress={() => {
            this.askBeforeGoBackLanguages();
          }}
        >
          <Text style={styles.backLanguages}>{this.props.language.accueil.toLowerCase()}</Text>
        </TouchableOpacity>
      );
  }
}

export default withNavigation(withLanguage(HomeButton));

const styles = StyleSheet.create({
  backHome: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    lineHeight: ButtonHeight,
    paddingRight: ButtonPadding / 2,
    paddingLeft: ButtonPadding / 2,
    color: '#999',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation / 2,
  },
  backLanguages: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    lineHeight: ButtonHeight,
    paddingRight: ButtonPadding,
    paddingLeft: ButtonPadding,
    color: '#999',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation / 2,
  },
});
