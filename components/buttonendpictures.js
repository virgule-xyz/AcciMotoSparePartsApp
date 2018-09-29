import React, {
    Component
} from 'react';

import {
    View,
    Image,
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
    ColorOrange
} from '../UI';

class ButtonEndPictures extends Component {
    render = () => {
        if (this.props.count > 0) {
            return (<TouchableOpacity onPress={() => {
        this.props.navigation.navigate("Screen5");
      }}>
      <View style={[styles.button, this.props.style]}>
        <Image style={styles.icons} source={require('@assets/images/check_mark.png')}/>
        <Text style={styles.text}>{this.props.language.terminer.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>);
        } else {
            return null;
        }
    }
}

export default withNavigation(withLanguage(ButtonEndPictures));

const styles = StyleSheet.create({
    button: {
        backgroundColor: ColorOrange,
        borderRadius: ButtonRadius,
        height: ButtonHeight,
        paddingRight: ButtonPadding / 2,
        paddingLeft: ButtonPadding / 2,
        elevation: ButtonElevation,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },
    icons: {
        width: ButtonHeight / 2,
        height: ButtonHeight / 2
    },
    text: {
        fontSize: ButtonFontSize,
        color: '#000',
        textAlign: 'center'
    }
});
