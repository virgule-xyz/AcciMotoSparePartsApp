import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from '@components/button';
import Logo from '@components/logo';
import { ButtonHeight } from '../UI';

const styles = StyleSheet.create({
  logo: {
    width: '90%',
    marginBottom: '20%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ButtonHeight,
    width: '90%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const Screen1 = ({ navigation }) => {
  const nextScreen = 'Screen2';

  const onPressFR = () => {
    navigation.navigate(nextScreen, {
      country: 'fr',
    });
  };

  const onPressPL = () => {
    navigation.navigate(nextScreen, {
      country: 'gb',
    });
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} country="fr" />
      <View style={styles.buttons}>
        <ActionButton
          style={{
            width: '45%',
          }}
          label="Français"
          onPress={() => {
            onPressFR();
          }}
        />
        <ActionButton
          style={{
            width: '45%',
          }}
          label="Polski"
          onPress={() => {
            onPressPL();
          }}
        />
      </View>
    </View>
  );
};

export default Screen1;
