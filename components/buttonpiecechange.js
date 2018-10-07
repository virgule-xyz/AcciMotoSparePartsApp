import React from 'react';
import { Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  withLanguage,
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

const ButtonPieceChange = ({ language, navigation, style }) => {
  const askBeforeGoBackHome = () => {
    Alert.alert(
      AlertTitle,
      language.question_retour_piece,
      [
        {
          text: language.non,
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: language.oui,
          onPress: () => {
            navigation.navigate('Screen2');
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  const render = () => (
    <TouchableOpacity
      onPress={() => {
        askBeforeGoBackHome();
      }}
    >
      <Text style={[style, styles.backHome]}>{language.changer.toLowerCase()}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(withLanguage(ButtonPieceChange));
