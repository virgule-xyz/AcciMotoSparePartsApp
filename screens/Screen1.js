import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PictureContext, ActionButton, Logo } from '@components';
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

  const onTestConnection = () => {
    navigation.goBack();
  };

  langue.country = 'fr';

  return (
    <PictureContext.Consumer>
      {({ connected }) => (
        <View style={styles.container}>
          <Logo style={styles.logo} country="fr" />
          <View style={styles.buttons}>
            {!connected && (
              <ActionButton
                style={{
                  width: '100%',
                }}
                label="⚡︎ Connect"
                onPress={() => {
                  onTestConnection();
                }}
              />
            )}
            {connected && (
              <>
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
              </>
            )}
          </View>
        </View>
      )}
    </PictureContext.Consumer>
  );
};

export default Screen1;
