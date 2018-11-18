import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActionButton, AppHeader, AppFooter, withBack } from '@components';
import { ButtonHeight, langue } from '../UI';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ButtonHeight,
    width: '90%',
  },
});

const Screen2 = ({ navigation }) => (
  <View style={styles.container}>
    <AppHeader home />
    <View style={styles.buttons}>
      <ActionButton
        style={{
          width: '45%',
        }}
        label={langue.sentence('piece')}
        onPress={() => {
          navigation.navigate('Screen3P');
        }}
      />
      <ActionButton
        style={{
          width: '45%',
        }}
        label={langue.sentence('moto')}
        onPress={() => {
          navigation.navigate('Screen3M');
        }}
      />
    </View>
    <AppFooter home />
  </View>
);

export default withBack(Screen2);
