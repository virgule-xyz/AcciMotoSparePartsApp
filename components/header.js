import React, {
    Component
} from 'react';
import Logo from './logo';

import {
    View,
    StyleSheet
} from 'react-native';

import {withNavigation} from 'react-navigation';
import {withLanguage} from '../UI';

const AppHeader = () => (<View style={styles.headerWrapper}>
    <Logo {...this.props} style={styles.logo}/>
</View>)

const styles = StyleSheet.create({
    headerWrapper: {
        position: 'absolute',
        height: 100,
        width: '100%',
        top: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: 100
    }
});

export default withNavigation(withLanguage(AppHeader));