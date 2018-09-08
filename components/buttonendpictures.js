import React, {Component} from 'react';

import {View, Image, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonMargins,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  ColorOrange,
  AlertTitle
} from '../UI';

export default function ButtonEndPictures(props) {
  const lg = UIStrings[props.navigation.getParam('language', 'fr')];

  if (props.count > 0) {
    return (<TouchableNativeFeedback onPress={() => {
        props.navigation.navigate("Screen5");
      }}>
      <View style={[styles.button, props.style]}>
        <Image style={styles.icons} source={require('@assets/images/check_mark.png')}/>
        <Text style={styles.text}>{lg.terminer.toUpperCase()}</Text>
      </View>
    </TouchableNativeFeedback>);
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorOrange,
    borderRadius: ButtonRadius,
    height: ButtonHeight,
    paddingRight: ButtonPadding/2,
    paddingLeft: ButtonPadding/2,
    elevation: ButtonElevation,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  icons:{
    width: ButtonHeight / 2,
    height: ButtonHeight / 2
  },
  text:{
    fontSize: ButtonFontSize,
    color: '#000',
    textAlign: 'center'
  }
});
