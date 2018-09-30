import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  ColorOrange,
  ColorLightGray,
  ButtonRadius,
  ButtonHeight,
  ButtonPadding,
  ButtonMargins,
  ButtonElevation,
} from '../UI';

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: ColorOrange,
    borderRadius: ButtonRadius,
    paddingHorizontal: ButtonPadding,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: ButtonHeight,
    elevation: ButtonElevation,
  },
  buttonImage: {
    width: ((ButtonHeight - ButtonMargins) * 90) / 100,
    height: ((ButtonHeight - ButtonMargins) * 90) / 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
});

const iconCamera = require('@assets/images/camera.png');

const ActionButton = ({ type, icon, label, onPress, style }) => {
  const bgcolor = type && type === 'cancel' ? ColorLightGray : ColorOrange;
  let content = null;
  let iconPicture = null;

  if (icon === 'camera') {
    iconPicture = iconCamera;
  }

  if (icon && icon.length > 0) {
    content = <Image source={iconPicture} style={styles.buttonImage} />;
  } else {
    content = <Text style={styles.buttonText}>{label}</Text>;
  }
  return (
    <TouchableOpacity
      style={[
        styles.buttonWrapper,
        style,
        {
          backgroundColor: bgcolor,
        },
      ]}
      onPress={() => {
        onPress();
      }}
    >
      {content}
    </TouchableOpacity>
  );
};

export default ActionButton;
