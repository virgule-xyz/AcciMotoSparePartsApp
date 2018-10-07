import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ActionButton, AppHeader, AppFooter, withBack } from '@components';
import { ButtonHeight } from '../UI';

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

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader home />
      <View style={styles.buttons}>
        <ActionButton
          style={{
            width: '45%',
          }}
          label="Pièce"
          onPress={() => {
            navigation.navigate('Screen3P');
          }}
        />
        <ActionButton
          style={{
            width: '45%',
          }}
          label="Moto"
          onPress={() => {
            navigation.navigate('Screen3M');
          }}
        />
      </View>
      <AppFooter home />
    </View>
  );
};

export default withNavigation(withBack(Screen2));
