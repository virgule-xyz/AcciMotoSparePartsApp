import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import Button from '@components/button';
import { ButtonHeight, ButtonMargins, withLanguage } from '../UI';
import { withBack } from '@components/withback';
import { withPictures } from '@components/withpictures';

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

class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  takePicture = async function() {
    const { navigation, onAddPicture } = this.props;
    if (this.camera) {
      const options = {
        base64: false,
      };
      const data = await this.camera.takePictureAsync(options);
      onAddPicture(data);
      navigation.navigate('Screen3');
    }
  };

  render() {
    const { language, navigation } = this.props;
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.cameraWrapper}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            permissionDialogTitle={language.permission_camera_title}
            permissionDialogMessage={language.permission_camera_message}
          />
          <View style={styles.cameraFooter}>
            <Button style={styles.valider} icon="camera" onPress={() => this.takePicture()} />
            <Button
              style={styles.annuler}
              type="cancel"
              label={language.annuler}
              onPress={() => navigation.navigate('Screen3')}
            />
          </View>
        </View>
        <AppFooter />
      </View>
    );
  }
}

export default withPictures(withNavigation(withLanguage(withBack(Screen4))));
