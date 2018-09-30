import React, { Component } from 'react';
import { Alert, StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import SparePartResume from '@components/sparepartresume';
// import EmptyPicture from '@components/emptypicture';
import PartPicture from '@components/partpicture';
import AddPictureButton from '@components/addpicturebutton';
import { ButtonHeight, AlertTitle } from '../UI';
import { withBack } from '@components/withback';
import { withPictures } from '@components/withpictures';

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
    height: 2 * ButtonHeight,
    overflow: 'hidden',
  },
  picturesWrapper: {
    marginHorizontal: '10%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonend: {
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
});

class Screen3 extends Component {
  constructor(props) {
    super(props);
    console.warn(props);
    this.state = {
      partPictures: props.pictures,
    };
  }

  deletePicture = (index, pname) => {
    const { language, onDeletePicture } = this.props;
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
            onDeletePicture(index, pname);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  getPicturesList = pictures =>
    pictures.map((p, index) => (
      <PartPicture
        key={index + p.name}
        file={p.name}
        onDelete={() => this.deletePicture(index, p.name)}
      />
    ));

  // onButtonNewPress = () => {
  //   this.props.navigation.navigate('Ecran4');
  // };

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const { language, pictures, onCallTest } = this.props;
    onCallTest(this.state);
    return (
      <View style={styles.container}>
        <AppHeader />
        <View
          style={{
            marginTop: 150,
          }}
        >
          <SparePartResume />
          <View style={styles.scrollPictureViewWrapper}>
            <ScrollView contentContainerStyle={styles.picturesWrapper}>
              <AddPictureButton />
              {this.getPicturesList(pictures)}
            </ScrollView>
          </View>
        </View>
        <AppFooter />
      </View>
    );
  }
}

export default withPictures(withNavigation(withBack(Screen3)));
