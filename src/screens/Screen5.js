import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { withBack, AppHeader, AppFooter, Button, PictureContext } from '@components';
import { ButtonHeight, ButtonMargins, langue } from '../UI';

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

class Screen5 extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = { takingPicture: false };
  }

  async takePicture(addPicture) {
    const { navigation } = this.props;
    if (this.camera) {
      const options = {
        fixOrientation: true,
        pauseAfterCapture: true,
        doNotSave: true,
        base64: true,
        quality: 0.8,
        width: 800,
      };
      this.setState({ takingPicture: true });
      const data = await this.camera.takePictureAsync(options);
      addPicture(data);
      this.setState({ takingPicture: false });
      navigation.navigate('Screen4');
    }
  }

  render() {
    const { navigation } = this.props;
    const { takingPicture } = this.state;
    return (
      <PictureContext.Consumer>
        {({ addPicture }) => (
          <View style={styles.container}>
            <AppHeader />
            <View
              style={{
                backgroundColor: '#fff',
                zIndex: takingPicture === true ? 1 : -1,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: takingPicture === true ? 'flex' : 'none',
              }}
            >
              <ActivityIndicator size="large" color="#fff" />
            </View>
            <View style={styles.cameraWrapper}>
              <CameraKitCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  backfaceVisibility: 'hidden',
                }}
                cameraOptions={{
                  flashMode: 'auto', // on/off/auto(default)
                  focusMode: 'on', // off/on(default)
                  zoomMode: 'on', // off/on(default)
                  ratioOverlay: '1:1', // optional, ratio overlay on the camera and crop the image seamlessly
                  ratioOverlayColor: '#00000000', // optional
                }}
              />
              <View style={styles.cameraFooter}>
                <Button
                  disabled={takingPicture}
                  style={styles.valider}
                  icon="camera"
                  onPress={() => this.takePicture(addPicture)}
                />
                <Button
                  disabled={takingPicture}
                  style={styles.annuler}
                  type="cancel"
                  label={langue.sentence('annuler')}
                  onPress={() => navigation.navigate('Screen4')}
                />
              </View>
            </View>
            <AppFooter nobuttons />
          </View>
        )}
      </PictureContext.Consumer>
    );
  }
}

export default withBack(Screen5);
