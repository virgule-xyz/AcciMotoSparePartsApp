import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import PictureContext from '@components/picturecontext';
import {
  langue,
  ButtonHeight,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  ColorOrange,
  AlertTitle,
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

const ButtonEndPictures = ({ navigation, style }) => (
  <PictureContext.Consumer>
    {({ pictures, uploadPictures }) =>
      pictures.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              AlertTitle,
              langue.sentence('etesvoussur'),
              [
                {
                  text: langue.sentence('non'),
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: langue.sentence('oui'),
                  onPress: () => {
                    uploadPictures();
                    navigation.navigate('Screen6');
                  },
                },
              ],
              {
                cancelable: false,
              },
            );
          }}
        >
          <View style={[styles.button, style]}>
            <Image style={styles.icons} source={checkMark} />
            <Text style={styles.text}>{langue.sentence('terminer').toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  </PictureContext.Consumer>
);

export default withNavigation(ButtonEndPictures);
