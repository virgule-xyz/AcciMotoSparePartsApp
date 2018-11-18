import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ColorOrange,
  ColorBlack,
  langue,
} from '../UI';

const styles = StyleSheet.create({
  actionButtonNew: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorOrange,
    justifyContent: 'center',
    alignItems: 'center',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    elevation: ButtonElevation,
    margin: 5,
  },
  icons: {
    width: ButtonHeight - 10,
    height: ButtonHeight - 10,
  },
  buttonText: {
    fontSize: ButtonFontSize,
    textAlign: 'center',
    color: ColorBlack,
  },
});

const addIcon = require('../assets/images/add.png');

const AddPictureButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.actionButtonNew}
    onPress={() => {
      navigation.navigate('Screen5');
    }}
  >
    <Image source={addIcon} style={styles.icons} />
    <Text style={styles.buttonText}>{langue.sentence('nouvelle_photo')}</Text>
  </TouchableOpacity>
);

export default withNavigation(AddPictureButton);
