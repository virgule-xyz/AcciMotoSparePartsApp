import React, {Component} from 'react';

import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

import {
  UIStrings,
  ButtonHeight,
  ButtonMargins,
  ButtonFontSize,
  ButtonRadius,
  ButtonPadding,
  ButtonElevation,
  AlertTitle
} from '../UI';

export default class AppFooter extends Component {

  constructor(props) {
    super(props);
  }

  askBeforeGoBackHome = () => {
    const lg = UIStrings[this.props.navigation.getParam('language', 'fr')];
    Alert.alert(AlertTitle, lg.question_retour_home, [
      {
        text: lg.non,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: lg.oui,
        onPress: () => {
          this.props.navigation.popToTop();
        }
      }
    ], {cancelable: false})
  }

  render() {
    const lg = UIStrings[this.props.navigation.getParam('language', 'fr')];

    const backButton = (<TouchableNativeFeedback onPress={() => {
          this.askBeforeGoBackHome();
        }}>
        <View style={styles.backHome}>
          <Text style={{
              textTransform: 'uppercase'
            }}>{lg.accueil}</Text>
        </View>
      </TouchableNativeFeedback>);

    if (this.props.uploaderCount === 0)
      return (<View style={styles.footerWrapper}>
        {backButton}
      </View>)
    else
      return (<View style={styles.footerWrapper}>

        {backButton}

        <View style={styles.counter}>
          <Text style={styles.counterText}>{this.props.uploaderCount}</Text>
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80
  },
  backHome: {
    backgroundColor: '#f5f5f5',
    borderRadius: ButtonRadius,
    fontSize: ButtonFontSize,
    height: ButtonHeight,
    paddingRight: ButtonPadding,
    paddingLeft: ButtonPadding,
    color: '#000',
    textAlign: 'center',
    marginLeft: 17,
    justifyContent: 'center',
    elevation: ButtonElevation
  },
  counter: {
    backgroundColor: '#04a9f4',
    fontSize: ButtonFontSize,
    borderRadius: 100,
    height: ButtonHeight,
    width: ButtonHeight,
    borderWidth: 2,
    borderColor: '#3b464b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17
  },
  counterText: {
    color: '#fff'
  }
});
