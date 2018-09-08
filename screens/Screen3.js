import React, {Component} from 'react';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import SparePartResume from '@components/sparepartresume';
import EmptyPicture from '@components/emptypicture';
import PartPicture from '@components/partpicture';
import AddPictureButton from '@components/addpicturebutton';
import {
  Platform,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import UI, {
  UIStrings,
  ButtonHeight,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  ButtonFontSize,
  ButtonMargins,
  ColorOrange,
  ColorBlack
} from '../UI';

type Props = {};

export default class Screen3 extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onButtonEndPress = () => {
    return false;
  }

  onButtonNewPress = () => {
    return false;
  }

  getPictures = () => {
    const pictures = [
      {
        'name': '@assets/images/test.jpeg'
      }, {
        'name': '@assets/images/test.jpeg'
      }, {
        'name': '@assets/images/test.jpeg'
      }, {
        'name': '@assets/images/test.jpeg'
      }, {
        'name': '@assets/images/test.jpeg'
      }, {
        'name': '@assets/images/test.jpeg'
      }
    ];
    return pictures;
  }

  getPicturesCount = () => {
    return this.getPictures().length;
  }

  getPicturesList = () => {
    var ret = this.getPictures().map((p) => <PartPicture key={p.name} file={p.name}/>);
    return ret;
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const language = this.props.navigation.getParam('language', 'fr');
    const lg = UIStrings[language];
    const uploaderCount = 0;

    return (<View style={styles.container}>
      <AppHeader language={language}/>
      <View style={{
          marginTop: 150
        }}>
        <SparePartResume language={language} navigation={this.props.navigation}/>
        <View style={styles.scrollPictureViewWrapper}>
          <ScrollView contentContainerStyle={styles.picturesWrapper}>
            <AddPictureButton language={language}/>
            {this.getPicturesList()}
            <EmptyPicture count={this.getPicturesCount()}/>
          </ScrollView>
        </View>
      </View>
      <AppFooter navigation={this.props.navigation} language={language} count={this.getPicturesCount()} uploaderCount={uploaderCount}/>
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  scrollPictureViewWrapper: {
    height: 2 * ButtonHeight + 130,
    overflow: 'hidden'
  },
  picturesWrapper: {
    marginHorizontal: '10%',
    marginHorizontal: '10%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  buttonend: {
    alignSelf:"flex-start",
    alignContent:"flex-start",
  }
});
