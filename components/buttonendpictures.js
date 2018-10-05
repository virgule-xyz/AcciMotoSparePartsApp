import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PictureContext from '@components/picturecontext';
import {
  withLanguage,
  ButtonHeight,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  ColorOrange,
} from '../UI';

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorOrange,
    borderRadius: ButtonRadius,
    height: ButtonHeight,
    paddingRight: ButtonPadding / 2,
    paddingLeft: ButtonPadding / 2,
    elevation: ButtonElevation,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icons: {
    width: ButtonHeight / 2,
    height: ButtonHeight / 2,
  },
  text: {
    fontSize: ButtonFontSize,
    color: '#000',
    textAlign: 'center',
  },
});

const checkMark = require('@assets/images/check_mark.png');

const ButtonEndPictures = ({ navigation, style, language }) => {
  return (
    <PictureContext.Consumer>
      {({ pictures, uploadPictures }) =>
        pictures.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              uploadPictures();
              navigation.navigate('Screen5');
            }}
          >
            <View style={[styles.button, style]}>
              <Image style={styles.icons} source={checkMark} />
              <Text style={styles.text}>{language.terminer.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        )
      }
    </PictureContext.Consumer>
  );
};

export default withNavigation(withLanguage(ButtonEndPictures));
