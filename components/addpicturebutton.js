import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  ToastAndroid,
  View
} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ButtonPadding,
  ButtonMargins,
  ColorOrange,
  ColorBlack,
  ColorGray,
  ColorLightGray,
  TextFontSize
} from '../UI';

export default function AddPictureButton(props) {
  const lg = UIStrings[props.language];
  return (<TouchableOpacity style={styles.actionButtonNew} onPress={() => {
        props.navigation.navigate("Screen4");
      }}>
    <Image source={require('../assets/images/add.png')} style={styles.icons}/>
    <Text style={styles.buttonText}>Nouvelle photo</Text>
  </TouchableOpacity>)
}


const styles = StyleSheet.create({
  actionButtonNew: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorOrange,
    justifyContent: 'center',
    alignItems: 'center',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    elevation: ButtonElevation,
    margin: 5
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
