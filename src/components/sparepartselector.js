import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import {
  langue,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ButtonPadding,
  ColorOrange,
  AlertTitle,
} from '../UI';
import App from '../App';

const styles = StyleSheet.create({
  sparepartswrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '80%',
    maxHeight: '60%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  sparepartswrapper_found: {
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    textAlign: 'center',
    margin: 0,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    margin: 0,
  },
  label_or: {
    fontSize: 24,
    textAlign: 'center',
  },
  codebar: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    elevation: ButtonElevation,
  },
  nextstep: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    elevation: ButtonElevation,
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
  barcodewrapper: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 220 + ButtonHeight + ButtonElevation,
  },
  preview: {
    flex: 0,
    flexGrow: 0,
    width: '100%',
    height: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cancel: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: ButtonElevation,
    paddingLeft: ButtonPadding,
    paddingRight: ButtonPadding,
  },
});

const barcodeimg = require('../assets/images/barcode.png');
const cameraimg = require('../assets/images/camera.png');

class SparePartSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      found: false,
      openbarcode: false,
      partnumber: null,
    };
  }

  onError = () => {
    this.setState({
      searching: false,
      found: false,
      openbarcode: false,
      partnumber: null,
    });

    Alert.alert(
      AlertTitle,
      langue.sentence('piece_inexistante'),
      [
        {
          text: langue.sentence('ok'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  setSearchModeOn = () => {
    this.setState({
      searching: true,
      found: false,
      openbarcode: false,
    });
  };

  setSearchModeOff = () => {
    this.setState({
      searching: false,
      found: false,
      openbarcode: false,
    });
  };

  searchSparePart = partnumber => {
    const { onSuccess } = this.props;
    if (partnumber && partnumber.length > 0) {
      App.makeSearch({
        kind: 'pie',
        partnumber,
        onSuccess,
        onError: this.onError,
        searchOn: this.setSearchModeOn,
        searchOff: this.setSearchModeOff,
        country: langue.country,
      });
    } else {
      this.onError();
    }
  };

  onSubmitEditing = event => {
    Keyboard.dismiss();
    const partnumber = event.nativeEvent.text;
    this.setState({
      searching: true,
      found: false,
      partnumber,
    });
    this.searchSparePart(partnumber);
  };

  onPressBarcode = () => {
    Keyboard.dismiss();
    this.canReadBarCode = true;
    this.setState({
      searching: false,
      openbarcode: true,
      found: false,
    });
  };

  onCancelBarcode = () => {
    Keyboard.dismiss();
    this.setState({
      searching: false,
      found: false,
      openbarcode: false,
    });
    this.canReadBarCode = false;
  };

  onBarcodeRead = event => {
    if (this.canReadBarCode) {
      this.canReadBarCode = false;
      if (event && event.data) {
        this.setState({
          openbarcode: false,
        });
        this.searchSparePart(event.data);
      }
    } else {
    }
  };

  render() {
    const { found, searching, openbarcode } = this.state;
    const message = () => {
      if (found) {
        return langue.sentence('selectionnez_une_piece_6');
      }
      if (searching) {
        return langue.sentence('selectionnez_une_piece_5');
      }
      if (openbarcode) {
        return null;
      }
      return langue.sentence('selectionnez_une_piece_1');
    };

    return (
      <View style={[styles.sparepartswrapper, found ? styles.sparepartswrapper_found : null]}>
        <ActivityIndicator
          style={[
            {
              position: 'absolute',
              top: '50%',
            },
            searching ? styles.show : styles.hide,
          ]}
          animating={searching}
          size="large"
          color={ColorOrange}
        />
        <Text style={styles.title}>{message}</Text>
        <TextInput
          editable={!searching}
          style={[styles.input, searching || found || openbarcode ? styles.hide : null]}
          placeholder={langue.sentence('selectionnez_une_piece_2')}
          allowFontScaling
          autoFocus={false}
          clearTextOnFocus
          keyboardType="number-pad"
          enablesReturnKeyAutomatically
          returnKeyType="done"
          underlineColorAndroid={ColorOrange}
          onSubmitEditing={e => this.onSubmitEditing(e)}
        />
        <Text style={[styles.label_or, searching || found || openbarcode ? styles.hide : null]}>
          {langue.sentence('selectionnez_une_piece_3')}
        </Text>

        <TouchableOpacity
          disabled={searching}
          onPress={this.onPressBarcode}
          style={[styles.codebar, searching || found || openbarcode ? styles.hide : null]}
        >
          <Image
            source={barcodeimg}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              fontSize: ButtonFontSize,
              color: '#000',
            }}
          >
            {langue.sentence('code_barres')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!found}
          onPress={this.onPressNextStep}
          style={[styles.nextstep, found ? null : styles.hide]}
        >
          <Text
            style={{
              fontSize: ButtonFontSize,
              color: '#000',
            }}
          >
            {langue.sentence('next_step')}
          </Text>
          <Image
            source={cameraimg}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <View style={[styles.barcodewrapper, openbarcode ? null : styles.hide]}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={langue.sentence('permission_camera_title')}
            permissionDialogMessage={langue.sentence('permission_camera_message')}
            onBarCodeRead={event => this.onBarcodeRead(event)}
            onXXXGoogleVisionBarcodesDetected={event => this.onBarcodeRead(event)}
          >
            <View
              style={{
                width: '80%',
                height: '60%',
                borderWidth: 2,
                borderColor: 'red',
              }}
            />
          </RNCamera>
          <TouchableOpacity style={styles.cancel} onPress={this.onCancelBarcode}>
            <Text
              style={{
                fontSize: ButtonFontSize,
                color: '#fff',
              }}
            >
              {langue.sentence('annuler')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SparePartSelector.propTypes = {
  onSuccess: PropTypes.func,
};

SparePartSelector.defaultProps = {
  onSuccess: null,
};

export default withNavigation(SparePartSelector);
