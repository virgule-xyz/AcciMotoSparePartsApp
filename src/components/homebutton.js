import React from 'react';
import { Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  ButtonHeight,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  AlertTitle,
  langue,
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

const HomeButton = ({ navigation, home, style }) => {
  const askBeforeGoBackLanguages = () => {
    navigation.navigate('Screen1');
  };

  const askBeforeGoBackHome = () => {
    Alert.alert(
      AlertTitle,
      langue.sentence('question_retour_piece'),
      [
        {
          text: langue.sentence('non'),
          style: 'cancel',
        },
        {
          text: langue.sentence('oui'),
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
        <Text style={[style, styles.backHome]}>{langue.sentence('changer').toLowerCase()}</Text>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      onPress={() => {
        askBeforeGoBackLanguages();
      }}
    >
      <Text style={styles.backLanguages}>{langue.sentence('accueil').toLowerCase()}</Text>
    </TouchableOpacity>
  );
};

HomeButton.propTypes = {
  home: PropTypes.bool,
};

HomeButton.defaultProps = {
  home: false,
};

export default withNavigation(HomeButton);
