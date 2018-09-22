import React, {
    Component
} from 'react';
import {
    StyleSheet,
    BackHandler,
    View
} from 'react-native';
import SparePartSelector from '@components/sparepartselector';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

export default class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: 3,
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack();
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    onSuccess = () => {
        const language = this.props.navigation.getParam('language', 'fr');
        this.props.navigation.navigate('Screen3', {
            language
        });
    }

    /**
     * [render description]
     * @return {[type]} [description]
     * TODO: Ajouter une props onFound
     */
    render() {
        const language = this.props.navigation.getParam('language', 'fr');
        return (
          <View style={styles.container}>
            <AppHeader language={language} />
            <SparePartSelector style={styles.spareParts} onSuccess={this.onSuccess} language={language} />
            <AppFooter navigation={this.props.navigation} home language={language} uploaderCount={this.state.pending} />
          </View>
        );
    }
}
