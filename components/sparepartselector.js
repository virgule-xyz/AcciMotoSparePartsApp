import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Keyboard,
  ActivityIndicator,
  ToastAndroid,
  View
} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ColorOrange
} from '../UI';

export default class SparePartSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      found: false,
      part: null
    }
  }

  ComponentDidMount = () => {
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.'
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera")
        } else {
          console.log("Camera permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    // requestCameraPermission();
  }

  onError = () => {
    const lg = UIStrings[this.props.language];
    ToastAndroid.showWithGravity(lg.piece_inexistante, ToastAndroid.SHORT, ToastAndroid.CENTER);
    this.setState({searching: false, found: false, part: null});
  }

  searchSparePart = (partId) => {
    if (partId && partId.length > 0) {
      this.setState({searching: true, found: false, part: partId});
      setTimeout(() => {
        this.setState({searching: false, found: true});
      }, 2000);
    } else {
      this.onError();
    }
  }

  onSubmitEditing = (event) => {
    Keyboard.dismiss;
    const partId = event.nativeEvent.text;
    this.setState({searching: true, found: false, part: partId});
    this.searchSparePart(partId);
  }

  onPressBarcode = () => {
    Keyboard.dismiss;
    this.setState({searching: true, found: false});
    setTimeout(() => {
      this.searchSparePart(null);
    }, 1000);
  }

  render() {
    const lg = UIStrings[this.props.language];
    return (<View style={[
        styles.sparepartswrapper,
        (
          this.state.found
          ? styles.sparepartswrapper_found
          : null)
      ]}>
      <ActivityIndicator style={[
          {
            position: 'absolute',
            top: '50%'
          },
          (
            this.state.searching
            ? styles.show
            : styles.hide)
        ]} animating={this.state.searching} size="large" color={ColorOrange}/>
      <Text style={styles.title}>{
          this.state.found
            ? lg.selectionnez_une_piece_6
            : (this.state.searching ? lg.selectionnez_une_piece_5 : lg.selectionnez_une_piece_1)
        }</Text>
      <TextInput editable={!this.state.searching} style={[
          styles.input,
          (
            this.state.searching | this.state.found
            ? styles.hide
            : null)
        ]} placeholder={lg.selectionnez_une_piece_2} allowFontScaling={true} autoFocus={false} clearTextOnFocus={true} keyboardType='number-pad' returnKeyType='search' returnKeyLabel='Trouver' underlineColorAndroid={ColorOrange} onSubmitEditing={this.onSubmitEditing}/>
      <Text style={[
          styles.label_or,
          (
            this.state.searching | this.state.found
            ? styles.hide
            : null)
        ]}>{lg.selectionnez_une_piece_3}</Text>
      <TouchableOpacity disabled={this.state.searching} onPress={this.onPressBarcode} style={[
          styles.codebar,
          (
            this.state.searching | this.state.found
            ? styles.hide
            : null)
        ]}>
        <Image source={require('../assets/images/barcode.png')} style={{
            width: 40,
            height: 40
          }}/>
        <Text style={{
            fontSize: ButtonFontSize,
            color: '#000'
          }}>{lg.code_barres}</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!this.state.found} onPress={this.onPressNextStep} style={[
          styles.nextstep,
          (
            this.state.found
            ? null
            : styles.hide)
        ]}>
        <Text style={{
            fontSize: ButtonFontSize,
            color: '#000'
          }}>{lg.next_step}</Text>
        <Image source={require('../assets/images/camera.png')} style={{
            width: 40,
            height: 40
          }}/>
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  sparepartswrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '80%',
    maxHeight: '50%',
    paddingTop: 10,
    paddingBottom: 10
  },
  sparepartswrapper_found: {
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    textAlign: 'center',
    margin: 0
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    margin: 0
  },
  label_or: {
    fontSize: 24,
    textAlign: 'center'
  },
  codebar: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    elevation: ButtonElevation
  },
  nextstep: {
    backgroundColor: ColorOrange,
    height: ButtonHeight,
    borderRadius: ButtonRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    elevation: ButtonElevation
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'flex'
  }
});
