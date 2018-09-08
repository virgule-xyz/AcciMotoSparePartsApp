import React, {Component} from 'react';

import {Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonMargins,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  AlertTitle
} from '../UI';

export default function ButtonPieceChange(props) {
  askBeforeGoBackHome = () => {
    const lg = UIStrings[props.navigation.getParam('language', 'fr')];
    Alert.alert(AlertTitle, lg.question_retour_piece, [
      {
        text: lg.non,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: lg.oui,
        onPress: () => {
          props.navigation.navigate('Screen2');
        }
      }
    ], {cancelable: false})
  }

  const lg = UIStrings[props.navigation.getParam('language', 'fr')];

  return (<TouchableNativeFeedback onPress={() => {
      askBeforeGoBackHome();
    }}>
    <Text style={[props.style, styles.backHome]}>{lg.changer.toUpperCase()}</Text>
  </TouchableNativeFeedback>);
}

const styles = StyleSheet.create({
  backHome: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize / 2,
    height: ButtonHeight / 2,
    lineHeight: ButtonHeight / 2,
    paddingRight: ButtonPadding / 3,
    paddingLeft: ButtonPadding / 3,
    color: '#000',
    elevation: ButtonElevation,
    width: 100,
    textAlign: 'center'
  }
});
