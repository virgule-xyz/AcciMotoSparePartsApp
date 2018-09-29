import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import {
    ButtonHeight,
    ButtonRadius,
    ColorLightGray
} from '../UI';

/**
 * Un bloc image vide
 * @param {*} props 
 */
export default function EmptyPicture(props) {
    if (props.count > 0)
        return null
    else
        return (<View style={styles.emptybutton}/>)
}

/**
 * STYLE
 */
const styles = StyleSheet.create({
    emptybutton: {
        borderRadius: ButtonRadius,
        backgroundColor: ColorLightGray,
        justifyContent: 'center',
        alignItems: 'center',
        width: ButtonHeight + 50,
        height: ButtonHeight + 50,
        margin: 5
    }
});
