import React, {
    Component
} from 'react'
import {withNavigation} from 'react-navigation';
import {withLanguage} from '../UI';
import {
    Image,
    StyleSheet
} from 'react-native'

class Logo extends Component {
render() {
    const src = (this.props.country === 'fr') ?
        require('@assets/images/logo_fr.png') :
        require('@assets/images/logo_gb.png');

    return (<Image resizeMode="contain" source={src} style={[styles.logo, this.props.style]}/>)
}
}

const styles = StyleSheet.create({
    logo: {
        width: "80%"
    }
});

export default withNavigation(withLanguage(Logo));