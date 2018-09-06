import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import {
  ButtonHeight,
  ButtonRadius,
  ColorLightGray,
  TextFontSize
} from '../UI';

export default class EmptyPicture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<View style={styles.emptybutton}/>)
  }
}

const styles = StyleSheet.create({
  emptybutton: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    margin:5
  }
});
