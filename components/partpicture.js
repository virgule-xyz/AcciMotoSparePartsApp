import React, {Component} from 'react';

import {Platform, StyleSheet, Image, TouchableOpacity, View} from 'react-native';

import {
  ButtonHeight,
  ButtonElevation,
  ButtonRadius,
  ColorGray,
  TextFontSize,
  ColorOrange
} from '../UI';

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
    return (<View style={styles.pictureWrapper}>
      <Image source={require('../assets/images/test.jpeg')} style={styles.inPicture}/>
      <TouchableOpacity style={styles.iconsWrapper}><Image source={require('../assets/images/trash.png')} style={styles.icons}/></TouchableOpacity>
    </View>)
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
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'contain'
  },
  iconsWrapper: {
    padding: ButtonElevation,
    elevation: ButtonElevation
  },
  icons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff'
  }
});
