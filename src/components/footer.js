import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import ButtonEndPictures from '@components/buttonendpictures';
import { PictureContext, HomeButton } from '@components';
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

const AppFooter = ({ home, nobuttons, noback }) => (
  <PictureContext.Consumer>
    {({ queue }) => (
      <>
        {!nobuttons && (
          <View style={styles.footerWrapper}>
            {!noback && <HomeButton home={home} />}
            {!noback && <ButtonEndPictures />}
            {noback && <View />}
            {queue && (
              <View style={styles.counter}>
                <Text style={styles.counterText}>{queue.length}</Text>
              </View>
            )}
          </View>
        )}
      </>
    )}
  </PictureContext.Consumer>
);

AppFooter.propTypes = {
  home: PropTypes.bool,
  nobuttons: PropTypes.bool,
  noback: PropTypes.bool,
};

AppFooter.defaultProps = {
  home: false,
  nobuttons: false,
  noback: false,
};

export default withNavigation(AppFooter);
