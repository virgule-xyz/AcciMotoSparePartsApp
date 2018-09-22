import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  BackHandler,
  ScrollView,
  View,
} from 'react-native';

import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import SparePartResume from '@components/sparepartresume';
import EmptyPicture from '@components/emptypicture';
import PartPicture from '@components/partpicture';
import AddPictureButton from '@components/addpicturebutton';

import {
  UIStrings,
  ButtonHeight,
  AlertTitle,
} from '../UI';

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
    height: 2 * ButtonHeight + 130,
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

export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: 3,
      pictures: [],
    };
  }

  componentDidMount() {
    const picture = this.props.navigation.getParam('picture');

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });

    if (picture) {
      const pictures = [...this.state.pictures];
      pictures.push({
        name: picture,
      });
      this.setState({
      pictures });
    }
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  getPictures = () => this.state.pictures;

  getPicturesCount = () => this.getPictures().length;

  deletePicture = (index, pname) => {
    const lg = UIStrings[this.props.navigation.getParam('language', 'fr')];
    Alert.alert(AlertTitle, lg.question_effacer_piece, [
      {
        text: lg.non,
        style: 'cancel'
      }, {
        text: lg.oui,
        onPress: () => {
          const new_pictures = this.state.pictures.filter((item, id) => (id + item.name) !== (index + pname));
          this.setState({
            pictures: new_pictures,
          });
        },
      },
    ], { cancelable: false });
  }

  getPicturesList = () => this.getPictures().map((p, index) => (
    <PartPicture
      key={index + p.name}
      file={p.name}
      onDelete={() => this.deletePicture(index, p.name)}
    />
  ));

  onButtonNewPress = () => {
    this.props.navigation.navigate('Ecran4', { language: 'fr' });
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const language = this.props.navigation.getParam('language', 'fr');

    return (
      <View style={styles.container}>
        <AppHeader language={language} />
        <View style={{
          marginTop: 150,
        }}
        >
          <SparePartResume language={language} navigation={this.props.navigation} />
          <View style={styles.scrollPictureViewWrapper}>
            <ScrollView contentContainerStyle={styles.picturesWrapper}>
              <AddPictureButton language={language} navigation={this.props.navigation} />
              {this.getPicturesList()}
              <EmptyPicture count={this.getPicturesCount()} />
              <EmptyPicture count={this.getPicturesCount()} />
              <EmptyPicture count={this.getPicturesCount()} />
              <EmptyPicture count={this.getPicturesCount()} />
              <EmptyPicture count={this.getPicturesCount()} />
            </ScrollView>
          </View>
        </View>
        <AppFooter navigation={this.props.navigation} language={language} count={this.getPicturesCount()} uploaderCount={this.state.pending} />
      </View>
    );
  }
}
