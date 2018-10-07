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
  withLanguage,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ButtonFontSize,
  ButtonPadding,
  ColorOrange,
  AlertTitle,
} from '../UI';
import AcciMoto from '@components/accimoto';

const styles = StyleSheet.create({
  motowrapper: {
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
  motowrapper_found: {
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
    marginBottom: 10,
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
});

class MotoSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      found: false,
      partnumber: null,
      kind: 'mot',
    };
  }

  onError = () => {
    const { language } = this.props;
    this.setState({
      searching: false,
      found: false,
      partnumber: null,
      kind: 'mot',
    });

    Alert.alert(
      AlertTitle,
      language.moto_inexistante,
      [
        {
          text: language.ok,
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
      kind: 'mot',
      partnumber: '',
      openbarcode: false,
    });
  };

  setSearchModeOff = () => {
    this.setState({
      searching: false,
      found: false,
      kind: 'mot',
      partnumber: '',
      openbarcode: false,
    });
  };

  searchMotoId = partnumber => {
    if (partnumber && partnumber.length > 0) {
      console.warn('searchMotoId', this.state);
      AcciMoto.makeSearch({
        kind: 'mot',
        partnumber: partnumber,
        onSuccess: this.props.onSuccess,
        onError: this.onError,
        searchOn: this.setSearchModeOn,
        searchOff: this.setSearchModeOff,
      });
    } else {
      this.onError();
    }
  };

  onSubmitEditing = event => {
    Keyboard.dismiss;
    const partnumber = event.nativeEvent.text;
    console.warn('onSubmitEditing 1', partnumber, event.nativeEvent.text);
    this.setState({
      searching: true,
      found: false,
      partnumber: event.nativeEvent.text,
    });
    this.searchMotoId(partnumber);
  };

  render() {
    return (
      <View style={[styles.motowrapper, this.state.found ? styles.motowrapper_found : null]}>
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
        <Text
          style={[styles.label_or, this.state.searching | this.state.found ? styles.hide : null]}
        >
          {this.props.language.selectionnez_une_moto_3}
        </Text>
        <Text style={styles.title}>
          {this.state.found
            ? this.props.language.selectionnez_une_moto_6
            : this.state.searching
              ? this.props.language.selectionnez_une_moto_5
              : this.state.openbarcode
                ? null
                : this.props.language.selectionnez_une_moto_1}
        </Text>
        <TextInput
          editable={!this.state.searching}
          style={[styles.input, this.state.searching | this.state.found ? styles.hide : null]}
          placeholder={this.props.language.selectionnez_une_moto_2}
          allowFontScaling={true}
          autoFocus={false}
          clearTextOnFocus={true}
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          underlineColorAndroid={ColorOrange}
          onSubmitEditing={e => this.onSubmitEditing(e)}
        />
      </View>
    );
  }
}

export default withNavigation(withLanguage(MotoSelector));
