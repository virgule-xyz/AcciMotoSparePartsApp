import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import {
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ColorOrange,
  ColorBlack,
  langue,
} from '../UI';
import { PictureContext } from '@components';

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
  <PictureContext.Consumer>
    {({ addPicture }) => (
      <TouchableOpacity
        style={styles.actionButtonNew}
        onPress={() => {
          ImagePicker.launchCamera(
            {
              title: '',
              mediaType: 'photo',
              quality: 0.9,
            },
            response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                addPicture(response.data);
              }
            },
          );
        }}
      >
        <Image source={addIcon} style={styles.icons} />
        <Text style={styles.buttonText}>{langue.sentence('nouvelle_photo')}</Text>
      </TouchableOpacity>
    )}
  </PictureContext.Consumer>
);

export default withNavigation(AddPictureButton);
