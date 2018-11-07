import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ButtonHeight, ButtonElevation, ButtonRadius, ColorGray } from '../UI';

const styles = StyleSheet.create({
  pictureWrapper: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorGray,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    margin: 5,
  },
  inPicture: {
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'contain',
  },
  iconsWrapper: {
    padding: ButtonElevation,
    elevation: ButtonElevation,
  },
  icons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
});

const trashIcon = require('@assets/images/trash.png');

export default function PartPicture({ file, onDelete }) {
  let filesource = {
    uri: 'data:image/jpeg;base64,' + file,
  };
  return (
    <View style={styles.pictureWrapper}>
      <Image source={filesource} style={styles.inPicture} />
      <TouchableOpacity onPress={onDelete} style={styles.iconsWrapper}>
        <Image source={trashIcon} style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
}
