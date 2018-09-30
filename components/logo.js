import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import { withLanguage } from '../UI';

const styles = StyleSheet.create({
  logo: {
    width: '80%',
  },
});

const frIcon = require('@assets/images/logo_fr.png');
const gbIcon = require('@assets/images/logo_gb.png');

const Logo = ({ country, style }) => {
  const src = country === 'fr' ? frIcon : gbIcon;

  return <Image resizeMode="contain" source={src} style={[styles.logo, style]} />;
};

export default withNavigation(withLanguage(Logo));
