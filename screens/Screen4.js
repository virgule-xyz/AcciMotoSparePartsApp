import React from 'react';
import { Alert, StyleSheet, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  withBack,
  AppHeader,
  AppFooter,
  SparePartResume,
  PartPicture,
  AddPictureButton,
  PictureContext,
} from '@components';
import { ButtonHeight, AlertTitle, withLanguage } from '../UI';
import { hidden } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  body: {
    width: '90%',
    height: '65%',
    marginTop: 150,
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
  },
  scrollPictureViewWrapper: {
    height: 3.2 * (ButtonHeight + 50),
    overflow: 'hidden',
  },
  picturesWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonend: {
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
  pictures: {
    flex: 1,
    height: '100%',
  },
});

const Screen4 = ({ language }) => {
  const deletePicture = (index, pname, removePicture) => {
    Alert.alert(
      AlertTitle,
      language.question_effacer_piece,
      [
        {
          text: language.non,
          style: 'cancel',
        },
        {
          text: language.oui,
          onPress: () => {
            removePicture(index, pname);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  return (
    <PictureContext.Consumer>
      {({ pictures, removePicture }) => (
        <View style={styles.container}>
          <AppHeader />
          <View style={styles.body}>
            <SparePartResume />
            <View style={styles.scrollPictureViewWrapper}>
              <ScrollView style={styles.pictures} contentContainerStyle={styles.picturesWrapper}>
                <AddPictureButton />
                {pictures.map((p, index) => (
                  <PartPicture
                    key={index + p}
                    file={p}
                    onDelete={() => deletePicture(index, p, removePicture)}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
          <AppFooter />
        </View>
      )}
    </PictureContext.Consumer>
  );
};

export default withNavigation(withLanguage(withBack(Screen4)));
