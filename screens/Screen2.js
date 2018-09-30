import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import SparePartSelector from '@components/sparepartselector';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import { withBack } from '@components/withback';
import { withPictures } from '@components/withpictures';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

const Screen2 = ({ navigation }) => {
  const onSuccess = () => {
    navigation.navigate('Screen3');
  };

  return (
    <View style={styles.container}>
      <AppHeader home />
      <SparePartSelector style={styles.spareParts} onSuccess={onSuccess} />
      <AppFooter home />
    </View>
  );
};

export default withPictures(withNavigation(withBack(Screen2)));
