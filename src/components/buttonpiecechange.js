import React from 'react';
import { Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  langue,
  ButtonHeight,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  AlertTitle,
} from '../UI';

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
    textAlign: 'center',
  },
});

const ButtonPieceChange = ({ navigation, style }) => {
  const askBeforeGoBackHome = () => {
    navigation.navigate('Screen2');
  };

  return (
    <TouchableOpacity
      onPress={() => {
        askBeforeGoBackHome();
      }}
    >
      <Text style={[style, styles.backHome]}>{langue.sentence('changer').toLowerCase()}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(ButtonPieceChange);
