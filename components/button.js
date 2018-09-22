import React from 'react';

import {
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import {
    ColorOrange,
    ColorLightGray,
    ButtonRadius,
    ButtonHeight,
    ButtonPadding,
    ButtonMargins,
    ButtonElevation,
} from '../UI';

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: ColorOrange,
        borderRadius: ButtonRadius,
        paddingHorizontal: ButtonPadding,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: ButtonHeight,
        elevation: ButtonElevation,
    },
    buttonImage: {
        width: (ButtonHeight - ButtonMargins) * 90 / 100,
        height: (ButtonHeight - ButtonMargins) * 90 / 100,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        margin: 0,
        padding: 0,
    },
});

export default function ActionButton(props) {
    const bgcolor = (props.type && props.type === 'cancel') ?
        ColorLightGray :
        ColorOrange;
    let content = null;
    let icon = null;

    if (props.icon == 'camera') {
        icon = require('@assets/images/camera.png');
    }

    if (props.icon && props.icon.length > 0) {
        content = (
            <Image source={icon} style={styles.buttonImage}/>
        );
    } else {
        content = (
            <Text style={styles.buttonText}>{props.label}</Text>
        );
    }
    return (
        <TouchableOpacity
      style={[
        styles.buttonWrapper,
        props.style, {
          backgroundColor: bgcolor
        },
      ]}
      onPress={() => {
        props.onPress();
      }
      }
    >
      {content}
    </TouchableOpacity>
    );
}
