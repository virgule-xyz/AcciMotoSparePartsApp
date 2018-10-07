import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PictureContext from '@components/picturecontext';
import { ButtonMargins, ColorBlack, ColorGray, ColorLightGray, TextFontSize } from '../UI';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: ButtonMargins,
    width: '80%',
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  partwrapper: {
    marginLeft: 5,
    position: 'relative',
  },
  puce: {
    backgroundColor: ColorLightGray,
    borderRadius: 100,
    width: 30,
    height: 30,
    flex: 0,
  },
  head1: {
    fontSize: TextFontSize,
    color: ColorBlack,
    fontWeight: 'bold',
    margin: 0,
  },
  head2: {
    fontSize: (TextFontSize * 2) / 3,
    marginBottom: 20,
    color: ColorGray,
  },
  line1: {
    color: ColorBlack,
    fontSize: (TextFontSize * 2) / 3,
    marginBottom: 10,
  },
  line2: {
    color: ColorBlack,
    fontSize: (TextFontSize * 2) / 3,
    marginBottom: 10,
  },
});

export default (SparePartResume = () => {
  return (
    <PictureContext.Consumer>
      {({ partdatas }) => {
        const { name, trademark, model, type, line1, line2 } = partdatas;
        return (
          <View style={styles.wrapper}>
            <View style={styles.puce} />
            <View style={styles.partwrapper}>
              <Text style={styles.head1}>{name}</Text>
              <Text style={styles.head2}>
                {trademark.toUpperCase()}/ {model.toUpperCase()}/ {type.toUpperCase()}
              </Text>
              <Text style={styles.line1}>{line1.toUpperCase()}</Text>
              <Text style={styles.line2}>{line2.toUpperCase()}</Text>
            </View>
          </View>
        );
      }}
    </PictureContext.Consumer>
  );
});
