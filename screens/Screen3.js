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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  scrollPictureViewWrapper: {
    height: 3 * (ButtonHeight + 50) - 25,
    overflow: 'hidden',
  },
  picturesWrapper: {
    marginHorizontal: '8%',
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

const Screen3 = ({ language }) => {
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
          <View
            style={{
              marginTop: 150,
            }}
          >
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

export default withNavigation(withLanguage(withBack(Screen3)));
