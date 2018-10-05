import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import SparePartSelector from '@components/sparepartselector';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import { withBack } from '@components/withback';

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

  const reset = navigation.getParam('reset', false);

  return (
    <View style={styles.container}>
      <AppHeader home />
      <SparePartSelector style={styles.spareParts} onSuccess={onSuccess} reset={reset} />
      <AppFooter home />
    </View>
  );
};

export default withNavigation(withBack(Screen2));
