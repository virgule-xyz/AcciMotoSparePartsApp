import React, {
    Component
} from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import {withNavigation} from 'react-navigation';

import {
    withLanguage,
    ButtonHeight,
    ButtonRadius,
    ButtonElevation,
    ButtonFontSize,
    ColorOrange,
    ColorBlack
} from '../UI';

class AddPictureButton extends Component {
    render = () => {
        return (<TouchableOpacity style={styles.actionButtonNew} onPress={() => {
            this.props.navigation.navigate("Screen4");
          }}>
        <Image source={require('../assets/images/add.png')} style={styles.icons}/>
        <Text style={styles.buttonText}>{this.props.language.nouvelle_photo}</Text>
      </TouchableOpacity>)
    }
}


export default withNavigation(withLanguage(AddPictureButton));

const styles = StyleSheet.create({
    actionButtonNew: {
        borderRadius: ButtonRadius,
        backgroundColor: ColorOrange,
        justifyContent: 'center',
        alignItems: 'center',
        width: ButtonHeight + 50,
        height: ButtonHeight + 50,
        elevation: ButtonElevation,
        margin: 5
    },
    icons: {
        width: ButtonHeight - 10,
        height: ButtonHeight - 10
    },
    buttonText: {
        fontSize: ButtonFontSize,
        textAlign: 'center',
        color: ColorBlack
    }
});
