import React, {
    Component
} from 'react';

import {
    View,
    Alert,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

import ButtonEndPictures from '@components/buttonendpictures';

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

function HomeButton(props) {
    const lg = UIStrings[props.language];
    askBeforeGoBackLanguages = () => {
        Alert.alert(AlertTitle, lg.question_retour_home, [{
            text: lg.non,
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: lg.oui,
            onPress: () => {
                props.navigation.popToTop();
            }
        }], {
            cancelable: false
        })
    }
    askBeforeGoBackHome = () => {
        Alert.alert(AlertTitle, lg.question_retour_piece, [{
            text: lg.non,
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: lg.oui,
            onPress: () => {
                props.navigation.navigate('Screen2');
            }
        }], {
            cancelable: false
        })
    }
    if (props.home !== true)
        return (<TouchableNativeFeedback onPress={() => {
        askBeforeGoBackHome();
      }}>
      <Text style={[props.style, styles.backHome]}>{lg.changer.toUpperCase()}</Text>
    </TouchableNativeFeedback>)
    else
        return (<TouchableNativeFeedback onPress={() => {
        askBeforeGoBackLanguages();
      }}>
      <Text style={styles.backLanguages}>{lg.accueil.toLowerCase()}</Text>
    </TouchableNativeFeedback>);
}

export default function AppFooter(props) {
    const language = props.navigation.getParam('language', 'fr');

    return (<View style={styles.footerWrapper}>
    <HomeButton navigation={props.navigation} language={language} home={props.home}/>
    <ButtonEndPictures navigation={props.navigation} language={language} count={props.count}/>
    <View style={styles.counter}>
      <Text style={styles.counterText}>{props.uploaderCount}</Text>
    </View>
  </View>)
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
        lineHeight: ButtonHeight,
        paddingRight: ButtonPadding / 2,
        paddingLeft: ButtonPadding / 2,
        color: '#999',
        textAlign: 'center',
        marginLeft: 17,
        justifyContent: 'center',
        elevation: ButtonElevation / 2
    },
    backLanguages: {
        backgroundColor: '#f5f5f5',
        borderRadius: ButtonRadius,
        fontSize: ButtonFontSize,
        height: ButtonHeight,
        lineHeight: ButtonHeight,
        paddingRight: ButtonPadding,
        paddingLeft: ButtonPadding,
        color: '#999',
        textAlign: 'center',
        marginLeft: 17,
        justifyContent: 'center',
        elevation: ButtonElevation / 2
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
