import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonHeight, ButtonRadius, ColorLightGray } from '../UI';

const styles = StyleSheet.create({
  emptybutton: {
    borderRadius: ButtonRadius,
    backgroundColor: ColorLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    width: ButtonHeight + 50,
    height: ButtonHeight + 50,
    margin: 5,
  },
});

export default function EmptyPicture({ count }) {
  if (count > 0) return null;
  return <View style={styles.emptybutton} />;
}

EmptyPicture.propTypes = {
  count: PropTypes.number,
};

EmptyPicture.defaultProps = {
  count: 0,
};
