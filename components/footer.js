import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonEndPictures from '@components/buttonendpictures';
import HomeButton from '@components/homebutton';
import { withPictures } from '@components/withpictures';
import PictureContext from '@components/picturecontext';
import { ButtonHeight, ButtonFontSize } from '../UI';

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

const AppFooter = ({ home, count, uploaderCount }) => (
  <PictureContext.Consumer>
    {pictures => (
      <View style={styles.footerWrapper}>
        <HomeButton home={home} />
        <ButtonEndPictures count={pictures.all.length} />
        <View style={styles.counter}>
          <Text style={styles.counterText}>{pictures.queue.length}</Text>
        </View>
      </View>
    )}
  </PictureContext.Consumer>
);

export default withPictures(withNavigation(AppFooter));
