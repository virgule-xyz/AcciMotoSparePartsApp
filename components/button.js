import React, {Component} from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {ColorOrange, ButtonRadius, ButtonMargins, ButtonElevation} from "../UI";

export default function ActionButton(props) {
  return (<TouchableOpacity style={[styles.buttonWrapper, props.style]} onPress={() => {
      props.onPress()
    }}>
    <Text style={styles.buttonText}>{props.label}</Text>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: ColorOrange,
    borderRadius: ButtonRadius,
    paddingTop: ButtonMargins,
    paddingBottom: ButtonMargins,
    textAlign: "center",
    elevation: ButtonElevation
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    margin: 0,
    padding: 0
  }
});
