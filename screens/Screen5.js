import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import Button from '@components/button';
import { withBack } from '@components/withback';
import { withLanguage } from '../UI';

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
const Screen5 = ({ language, navigation }) => (
  <View style={styles.container}>
    <AppHeader />
    <View style={styles.body}>
      <Text style={styles.text}>{language.les_photos_remontent}</Text>
      <Text style={styles.text}>{language.le_nombre_de_photos}</Text>
      <Button
        label={language.changerdepiece}
        onPress={() => {
          navigation.navigate('Screen2', { reset: true });
        }}
      />
    </View>
    <AppFooter noback />
  </View>
);

export default withNavigation(withLanguage(withBack(Screen5)));
