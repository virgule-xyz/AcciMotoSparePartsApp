import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActionButton, Logo } from '@components';
import { ButtonHeight, langue } from '../UI';

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
    langue.country = 'fr';
    navigation.navigate(nextScreen, {
      country: 'fr',
    });
  };

  const onPressPL = () => {
    langue.country = 'pl';
    navigation.navigate(nextScreen, {
      country: 'pl',
    });
  };

  langue.country = 'fr';

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
