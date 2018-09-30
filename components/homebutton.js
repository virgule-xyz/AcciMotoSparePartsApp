import React from 'react';
import { Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
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
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    lineHeight: ButtonHeight,
    paddingRight: ButtonPadding / 2,
    paddingLeft: ButtonPadding / 2,
    color: '#999',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation / 2,
  },
  backLanguages: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    lineHeight: ButtonHeight,
    paddingRight: ButtonPadding,
    paddingLeft: ButtonPadding,
    color: '#999',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation / 2,
  },
});

const HomeButton = ({ language, navigation, home, style }) => {
  const askBeforeGoBackLanguages = () => {
    Alert.alert(
      AlertTitle,
      language.question_retour_home,
      [
        {
          text: language.non,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: language.oui,
          onPress: () => {
            navigation.navigate('Screen1');
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  const askBeforeGoBackHome = () => {
    Alert.alert(
      AlertTitle,
      language.question_retour_piece,
      [
        {
          text: language.non,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: language.oui,
          onPress: () => {
            navigation.navigate('Screen2', { reset: true });
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  if (!home)
    return (
      <TouchableOpacity
        onPress={() => {
          askBeforeGoBackHome();
        }}
      >
        <Text style={[style, styles.backHome]}>{language.changer.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      onPress={() => {
        askBeforeGoBackLanguages();
      }}
    >
      <Text style={styles.backLanguages}>{language.accueil.toLowerCase()}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(withLanguage(HomeButton));
