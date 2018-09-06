import React, {Component} from 'react';

import {Platform, StyleSheet, Image, TouchableOpacity, View} from 'react-native';

import {ButtonHeight, ButtonRadius, ColorGray, TextFontSize} from '../UI';

export default class PartPicture extends Component {

  constructor(props) {
    super(props);
  }

  // render() {
  //   return (<View style={styles.onePictureWrapper}>
  //     <Image source={require('../assets/images/test.jpeg')} style={styles.inPicture}/>
  //   </View>)
  // }
  render() {
    return (<TouchableOpacity style={styles.pictureWrapper}>
      <Image source={require('../assets/images/test.jpeg')} style={styles.inPicture}/>
      <Image source={require('../assets/images/trash.png')} style={styles.icons}/>
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  pictureWrapper: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorGray,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    margin: 5
  },
  inPicture: {
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    position:'absolute',
    top:0,
    left:0,
    resizeMode: 'contain'
  },
  icons: {
    width: ButtonHeight - 10,
    height: ButtonHeight - 10,
    opacity:0.9
  }
});
