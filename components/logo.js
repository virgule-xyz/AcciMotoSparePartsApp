import React, {
    Component
} from 'react'
import {
    Image,
    StyleSheet
} from 'react-native'

export default function Logo(props) {
    const src = (props.language === 'fr') ?
        require('@assets/images/logo_fr.png') :
        require('@assets/images/logo_gb.png');

    return (<Image resizeMode="contain" source={src} style={[styles.logo, props.style]}/>)
}

const styles = StyleSheet.create({
    logo: {
        width: "80%"
    }
});
