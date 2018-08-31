import React, {Component} from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {ColorOrange, ButtonRadius, ButtonMargins, ButtonElevation} from "../UI";

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<TouchableOpacity style={[styles.buttonWrapper, this.props.style]} onPress={() => {
        this.props.onPress()
      }}>
      <Text style={styles.buttonText}>{this.props.label}</Text>
    </TouchableOpacity>)
  }
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
