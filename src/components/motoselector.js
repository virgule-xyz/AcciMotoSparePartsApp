import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  langue,
  ButtonHeight,
  ButtonRadius,
  ButtonElevation,
  ColorOrange,
  AlertTitle,
} from '../UI';
// import AcciMoto from '@components/accimoto';
import App from '../App';

const styles = StyleSheet.create({
  motowrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '80%',
    height: '30%',
    maxHeight: 7 * 24,
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
    };
  }

  onError = () => {
    this.setState({
      searching: false,
      found: false,
      partnumber: null,
    });

    Alert.alert(
      AlertTitle,
      langue.sentence('moto_inexistante'),
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
    });
  };

  setSearchModeOff = () => {
    this.setState({
      searching: false,
      found: false,
    });
  };

  searchMotoId = partnumber => {
    const { onSuccess } = this.props;
    if (partnumber && partnumber.length > 0) {
      App.makeSearch({
        kind: 'mot',
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
    this.searchMotoId(partnumber);
  };

  render() {
    const { found, searching } = this.state;
    const message = () => {
      if (found) {
        return langue.sentence('selectionnez_une_moto_6');
      }
      if (searching) {
        return langue.sentence('selectionnez_une_moto_5');
      }
      return langue.sentence('selectionnez_une_moto_1');
    };
    return (
      <View style={[styles.motowrapper, found ? styles.motowrapper_found : null]}>
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
        <Text style={[styles.label_or, searching || found ? styles.hide : null]}>
          {langue.sentence('selectionnez_une_moto_3')}
        </Text>
        <Text style={styles.title}>{message}</Text>
        <TextInput
          editable={!searching}
          style={[styles.input, searching || found ? styles.hide : null]}
          placeholder={langue.sentence('selectionnez_une_moto_2')}
          allowFontScaling
          keyboardType="number-pad"
          autoFocus={false}
          enablesReturnKeyAutomatically
          returnKeyType="done"
          underlineColorAndroid={ColorOrange}
          onSubmitEditing={e => this.onSubmitEditing(e)}
        />
      </View>
    );
  }
}

MotoSelector.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default withNavigation(MotoSelector);
