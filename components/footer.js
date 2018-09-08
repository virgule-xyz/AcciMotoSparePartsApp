import React, {Component} from 'react';

import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

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

export default function AppFooter(props) {

  askBeforeGoBackLanguages = () => {
    const lg = UIStrings[props.navigation.getParam('language', 'fr')];
    Alert.alert(AlertTitle, lg.question_retour_home, [
      {
        text: lg.non,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: lg.oui,
        onPress: () => {
          props.navigation.popToTop();
        }
      }
    ], {cancelable: false})
  }
  const lg = UIStrings[props.navigation.getParam('language', 'fr')];

  const homeButton = (<TouchableNativeFeedback onPress={() => {
      askBeforeGoBackLanguages();
    }}>
    <Text style={styles.backLanguages}>{lg.accueil.toLowerCase()}</Text>
  </TouchableNativeFeedback>);

  if (props.uploaderCount === 0)
    return (<View style={styles.footerWrapper}>
      {homeButton}
    </View>)
  else
    return (<View style={styles.footerWrapper}>
      {homeButton}
      <View style={styles.counter}>
        <Text style={styles.counterText}>{props.uploaderCount}</Text>
      </View>
    </View>)
}


const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80
  },
  backHome: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    paddingRight: ButtonPadding,
    paddingLeft: ButtonPadding,
    color: '#000',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation
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
    elevation: ButtonElevation / 2
  },
  counter: {
    backgroundColor: '#04a9f4',
    fontSize: ButtonFontSize,
    borderRadius: 100,
    height: ButtonHeight,
    width: ButtonHeight,
    borderWidth: 2,
    borderColor: '#3b464b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17
  },
  counterText: {
    color: '#fff'
  }
});
