import React, { Component } from 'react';
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
import { RNCamera } from 'react-native-camera';
import AcciMoto from '@components/accimoto';

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

class SparePartSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      found: false,
      partnumber: null,
      openbarcode: false,
    };
  }

  onError = () => {
    this.setState({
      searching: false,
      found: false,
      partnumber: null,
      openbarcode: false,
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
      partnumber: '',
      openbarcode: false,
    });
  };

  setSearchModeOff = () => {
    this.setState({
      searching: false,
      found: false,
      partnumber: '',
      openbarcode: false,
    });
  };

  searchSparePart = partnumber => {
    if (partnumber && partnumber.length > 0) {
      AcciMoto.makeSearch({
        kind: 'pie',
        partnumber: partnumber,
        onSuccess: this.props.onSuccess,
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
    Keyboard.dismiss;
    const partnumber = event.nativeEvent.text;
    this.setState({
      searching: true,
      found: false,
      partnumber: event.nativeEvent.text,
    });
    this.searchSparePart(partnumber);
  };

  onPressBarcode = () => {
    Keyboard.dismiss;
    this.setState({
      searching: false,
      openbarcode: true,
      found: false,
    });
  };

  onCancelBarcode = () => {
    Keyboard.dismiss;
    this.setState({
      searching: false,
      found: false,
      openbarcode: false,
    });
  };

  onBarcodeRead = event => {
    if (event.data !== null) {
      this.setState({
        openbarcode: false,
      });
      this.searchSparePart(event.data);
    }
    return;
  };

  render() {
    return (
      <View
        style={[styles.sparepartswrapper, this.state.found ? styles.sparepartswrapper_found : null]}
      >
        <ActivityIndicator
          style={[
            {
              position: 'absolute',
              top: '50%',
            },
            this.state.searching ? styles.show : styles.hide,
          ]}
          animating={this.state.searching}
          size="large"
          color={ColorOrange}
        />
        <Text style={styles.title}>
          {this.state.found
            ? langue.sentence('selectionnez_une_piece_6')
            : this.state.searching
              ? langue.sentence('selectionnez_une_piece_5')
              : this.state.openbarcode
                ? null
                : langue.sentence('selectionnez_une_piece_1')}
        </Text>
        <TextInput
          editable={!this.state.searching}
          style={[
            styles.input,
            this.state.searching | this.state.found | this.state.openbarcode ? styles.hide : null,
          ]}
          placeholder={langue.sentence('selectionnez_une_piece_2')}
          allowFontScaling={true}
          autoFocus={false}
          clearTextOnFocus={true}
          keyboardType="number-pad"
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          underlineColorAndroid={ColorOrange}
          onSubmitEditing={e => this.onSubmitEditing(e)}
        />
        <Text
          style={[
            styles.label_or,
            this.state.searching | this.state.found | this.state.openbarcode ? styles.hide : null,
          ]}
        >
          {langue.sentence('selectionnez_une_piece_3')}
        </Text>

        <TouchableOpacity
          disabled={this.state.searching}
          onPress={this.onPressBarcode}
          style={[
            styles.codebar,
            this.state.searching | this.state.found | this.state.openbarcode ? styles.hide : null,
          ]}
        >
          <Image
            source={require('../assets/images/barcode.png')}
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
          disabled={!this.state.found}
          onPress={this.onPressNextStep}
          style={[styles.nextstep, this.state.found ? null : styles.hide]}
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
            source={require('../assets/images/camera.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <View style={[styles.barcodewrapper, this.state.openbarcode ? null : styles.hide]}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={langue.sentence('permission_camera_title')}
            permissionDialogMessage={langue.sentence('permission_camera_message')}
            onBarCodeRead={this.onBarcodeRead}
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

export default withNavigation(SparePartSelector);
