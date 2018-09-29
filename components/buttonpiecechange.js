import React, {
    Component
} from 'react';

import {
    Alert,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    withNavigation
} from 'react-navigation';
import {
    withLanguage,
    ButtonHeight,
    ButtonFontSize,
    ButtonRadius,
    ButtonPadding,
    ButtonElevation,
    AlertTitle
} from '../UI';

class ButtonPieceChange extends Component {
    askBeforeGoBackHome = () => {
        Alert.alert(AlertTitle, this.props.language.question_retour_piece, [{
            text: this.props.language.non,
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: this.props.language.oui,
            onPress: () => {
                this.props.navigation.navigate('Screen2');
            }
        }], {
            cancelable: false
        })
    }

    render() {
        return (<TouchableOpacity onPress={() => {
          this.askBeforeGoBackHome();
        }}>
        <Text style={[this.props.style, styles.backHome]}>{this.props.language.changer.toUpperCase()}</Text>
      </TouchableOpacity>);
    }
}

export default withNavigation(withLanguage(ButtonPieceChange));

const styles = StyleSheet.create({
    backHome: {
        backgroundColor: '#f5f5f5',
        borderRadius: ButtonRadius,
        fontSize: ButtonFontSize / 2,
        height: ButtonHeight / 2,
        lineHeight: ButtonHeight / 2,
        paddingRight: ButtonPadding / 3,
        paddingLeft: ButtonPadding / 3,
        color: '#000',
        elevation: ButtonElevation,
        width: 100,
        textAlign: 'center'
    }
});
