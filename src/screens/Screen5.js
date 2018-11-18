import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
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
        base64: true,
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
          <React.StrictMode>
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
                  ratio="1:1"
                  aspect="fit"
                  permissionDialogTitle={langue.sentence('permission_camera_title')}
                  permissionDialogMessage={langue.sentence('permission_camera_message')}
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
          </React.StrictMode>
        )}
      </PictureContext.Consumer>
    );
  }
}

export default withBack(Screen5);
