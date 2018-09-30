import React from 'react';
import { withNavigation } from 'react-navigation';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import Button from '@components/button';
import { StyleSheet, Text, View } from 'react-native';

import { withBack } from '@components/withback';
import { withPictures } from '@components/withpictures';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: '80%',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: '#333',
  },
});

const Screen5 = ({ language, navigation }) => {
  render = () => (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.body}>
        <Text style={styles.text}>
          Les photos de cette pièce sont en cours de remontée vers les serveurs...
        </Text>
        <Text style={styles.text}>
          Le nombre de photos en cours de chargement vers les serveurs est systématiquement indiqué
          en bas à droite dans le rond bleu.
        </Text>
        <Button
          label={language.changerdepiece}
          onPress={() => {
            navigation.navigate('Screen2');
          }}
        />
      </View>
      <AppFooter />
    </View>
  );
};

export default withPictures(withNavigation(withBack(Screen5)));
