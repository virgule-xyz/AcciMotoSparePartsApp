import React, { Component } from 'react';
import { StyleSheet, BackHandler, View } from 'react-native';

import { RNCamera } from 'react-native-camera';

import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import Button from '@components/button';

import { UIStrings, ButtonHeight, ButtonMargins } from '../UI';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cameraWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 400,
  },
  cameraFooter: {
    width: '100%',
    height: ButtonHeight + 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  valider: {
    marginRight: ButtonMargins,
  },
  preview: {
    flex: 0,
    flexGrow: 0,
    width: '100%',
    height: 300,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ButtonMargins,
  },
});

export default class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: 3,
      pictures: [
        {
          name: '@assets/images/test.jpeg',
        }, {
          name: '@assets/images/test.jpeg',
        }, {
          name: '@assets/images/test.jpeg',
        }, {
          name: '@assets/images/test.jpeg',
        }, {
          name: '@assets/images/test.jpeg',
        }, {
          name: '@assets/images/test.jpeg',
        },
      ],
    }
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

  render() {
    const language = this.props.navigation.getParam('language', 'fr');
    const lg = UIStrings[language];

    return (
      <View style={styles.container}>
        <AppHeader language={language} />
        <View style={styles.cameraWrapper}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            permissionDialogTitle={lg.permission_camera_title}
            permissionDialogMessage={lg.permission_camera_message}
          />
          <View style={styles.cameraFooter}>
            <Button
              style={styles.valider}
              icon="camera"
              onPress={() => {
                this.props.navigation.navigate('Screen3');
              }}
            />
            <Button
              style={styles.annuler}
              type="cancel"
              label={lg.annuler}
              onPress={() => {
                this.props.navigation.navigate('Screen3');
              }}
            />
          </View>
        </View>
        <AppFooter navigation={this.props.navigation} language={language} uploaderCount={this.state.pending} />
      </View>
    );
  }
}
