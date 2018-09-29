import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

import ButtonEndPictures from '@components/buttonendpictures';
import HomeButton from '@components/homebutton';

import { ButtonHeight, ButtonFontSize } from '../UI';

class AppFooter extends Component {
  render = () => (
    <View style={styles.footerWrapper}>
      <HomeButton />
      <ButtonEndPictures count={this.props.count} />
      <View style={styles.counter}>
        <Text style={styles.counterText}>{this.props.uploaderCount}</Text>
      </View>
    </View>
  );
}

export default withNavigation(AppFooter);

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  counter: {
    backgroundColor: '#04a9f4',
    fontSize: ButtonFontSize,
    borderRadius: 100,
    height: ButtonHeight,
    width: ButtonHeight,
    borderWidth: 2,
    borderColor: '#3b464b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17,
  },
  counterText: {
    color: '#fff',
  },
});
