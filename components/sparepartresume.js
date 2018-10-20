import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PictureContext from '@components/picturecontext';
import {
  ButtonMargins,
  ColorBlack,
  ColorGray,
  ColorLightGray,
  TextFontSize,
  withLanguage,
} from '../UI';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: ButtonMargins,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    overflow: 'hidden',
  },
  partwrapper: {
    marginLeft: 5,
    position: 'relative',
    textAlign: 'left',
    flex: 1,
    overflow: 'hidden',
  },
  puce: {
    backgroundColor: ColorLightGray,
    borderRadius: 100,
    width: 50,
    height: 50,
    flex: 0,
    overflow: 'hidden',
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

const SparePartResume = ({ language }) => {
  return (
    <PictureContext.Consumer>
      {({ partnumber, partdatas, motdatas }) => {
        if (type === 'pie') {
          const { name, trademark, model, type, couleur, cylindree, periode } = partdatas;
          const space = periode ? ' / ' : '';
          return (
            <View style={styles.wrapper}>
              <View style={styles.puce} />
              <View style={styles.partwrapper}>
                <Text style={styles.head1}>
                  {type.toUpperCase()} - {partnumber}
                </Text>
                <Text style={styles.head2}>
                  {trademark.toUpperCase()}/ {model.toUpperCase()}/ {name.toUpperCase()}
                </Text>
                <Text style={styles.line1}>{name.toUpperCase()}</Text>
                <Text style={styles.line2}>
                  {periode && `${periode.toUpperCase()}`}
                  {couleur && `${space}${couleur.toUpperCase()}`}
                </Text>
              </View>
            </View>
          );
        }
        // if (type === 'mot') {
        const { type, num, marque, modele, immat, kms, couleur } = motdatas;
        const space = kms ? ' / ' : '';
        return (
          <View style={styles.wrapper}>
            <View style={styles.puce} />
            <View style={styles.partwrapper}>
              <Text style={styles.head1}>
                {language.moto} - {partnumber}
              </Text>
              <Text style={styles.head2}>
                {marque.toUpperCase()}/ {modele.toUpperCase()}
              </Text>
              <Text style={styles.line1}>{immat.toUpperCase()}</Text>
              <Text style={styles.line2}>
                {kms && `${kms.toUpperCase()}`}
                {couleur && `${space}${couleur.toUpperCase()}`}
              </Text>
            </View>
          </View>
        );
        // }
      }}
    </PictureContext.Consumer>
  );
};

export default withLanguage(SparePartResume);
