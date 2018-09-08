import React, {Component} from 'react';
import {ColorOrange, ColorBlack, ButtonHeight} from '../UI';
import ActionButton from '@components/button';
import Logo from '@components/logo';
import {StyleSheet, Container, Text, View} from 'react-native';

export default function Screen1(props) {

  const nextScreen = "Screen2";

  onPressFR = () => {
    props.navigation.navigate(nextScreen, {language: 'fr'});
  }

  onPressPL = () => {
    props.navigation.navigate(nextScreen, {language: 'gb'});
  }

  return (<View style={styles.container}>
    <Logo style={styles.logo} language='fr'/>
    <View style={styles.buttons}>
      <ActionButton style={{
          width: "35%"
        }} label="Français" onPress={() => {
          onPressFR()
        }}/>
      <ActionButton style={{
          width: "35%"
        }} label="Polski" onPress={() => {
          onPressPL()
        }}/>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  logo: {
    width: "90%",
    marginBottom: "20%"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: ButtonHeight,
    width: "90%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
