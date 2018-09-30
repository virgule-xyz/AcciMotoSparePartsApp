import React from 'react';
import Logo from './logo';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { withLanguage } from '../UI';

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    height: 100,
    width: '100%',
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 100,
  },
});

const AppHeader = props => (
  <View style={styles.headerWrapper}>
    <Logo {...props} style={styles.logo} />
  </View>
);

export default withNavigation(withLanguage(AppHeader));
